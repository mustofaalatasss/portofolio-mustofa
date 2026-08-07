import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const AiChat = () => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                { sender: 'ai', text: t('chat.greeting') }
            ]);
        }
    }, [isOpen, messages.length, t]);

    // Auto-scroll to bottom of chat
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMessage = inputText;
        const newMessages = [...messages, { sender: 'user', text: userMessage }];
        setMessages(newMessages);
        setInputText('');
        setIsTyping(true);

        // Supaya n8n tidak error saat mem-parsing JSON, kita gunakan pemisah garis lurus ' | '
        // dan kita BERSIHKAN semua 'Enter' (\n) serta tanda kutip (") dari memori chat.
        const greetingText = t('chat.greeting');
        const conversationMemory = newMessages
            // Filter out the greeting message (in any language) to avoid biasing the AI
            .filter(msg => msg.text !== greetingText)
            .slice(-5) // Ingat 5 obrolan terakhir agar hemat token
            .map(msg => {
                // Ganti semua enter dengan spasi, dan kutip dua dengan kutip satu
                const cleanText = msg.text.replace(/[\n\r]+/g, ' ').replace(/"/g, "'");
                return msg.sender === 'ai' ? `[Assistant's past answer]: ${cleanText}` : `[Visitor's message]: ${cleanText}`;
            })
            .join(' | ');

        try {
            const response = await fetch('https://n8n.portofolio-mustofa.my.id/webhook/Chat-Api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: conversationMemory })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Kita ubah menjadi .text() agar n8n cukup mengirim teks mentah,
            // ini 100x lebih aman daripada harus membuat JSON di n8n yang rawan error baris baru.
            const textResponse = await response.text();
            const aiReply = textResponse || "Maaf, saya tidak dapat merespons saat ini.";

            setMessages((prev) => [...prev, { sender: 'ai', text: aiReply }]);
        } catch (error) {
            console.error('Error fetching AI response:', error);
            setMessages((prev) => [...prev, { 
                sender: 'ai', 
                text: 'Maaf, otak AI saya sedang mengalami gangguan koneksi. Coba lagi dalam beberapa saat ya!' 
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="ai-chat-container">
            {isOpen && (
                <div className="ai-chat-window">
                    <div className="ai-chat-header">
                        <div className="ai-chat-header-info">
                            <img src="/images/ai-bubble.png" alt="AI Avatar" className="ai-avatar" />
                            <div>
                                <h4>AI Assistant</h4>
                                <span className="online-status">Online</span>
                            </div>
                        </div>
                        <button className="close-chat-btn" onClick={() => setIsOpen(false)}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div className="ai-chat-body">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`chat-message ${msg.sender === 'ai' ? 'message-ai' : 'message-user'}`}>
                                {msg.sender === 'ai' && (
                                    <img src="/images/ai-bubble.png" alt="AI" className="message-avatar" />
                                )}
                                <div className="message-content">{msg.text}</div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="chat-message message-ai">
                                <img src="/images/ai-bubble.png" alt="AI" className="message-avatar" />
                                <div className="message-content typing-indicator">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="ai-chat-footer" onSubmit={handleSendMessage}>
                        <input 
                            type="text" 
                            placeholder="Ketik pesan..." 
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <button type="submit" disabled={!inputText.trim()}>
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            )}

            {!isOpen && (
                <div className="ai-chat-bubble-wrapper" onClick={() => setIsOpen(true)}>
                    <span className="ai-chat-tooltip">{t('chat.tooltip')}</span>
                    <button className="ai-chat-bubble">
                        <img src="/images/ai-avatar.png" alt="Chat with AI" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default AiChat;
