import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({ text, type = 'words', delay = 0, style = {}, className = "" }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const el = textRef.current;
        if (!el) return;
        
        let elementsToAnimate = type === 'chars' ? el.querySelectorAll('.char') : el.querySelectorAll('.word');

        // Initial state
        gsap.set(elementsToAnimate, { y: "120%", opacity: 0 });

        const st = ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            onEnter: () => {
                gsap.to(elementsToAnimate, {
                    y: "0%",
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.03,
                    ease: "power4.out",
                    delay: delay,
                    overwrite: true
                });
            }
        });

        return () => {
            if (st) st.kill();
        };

    }, [text, type, delay]);

    const renderText = () => {
        if (type === 'chars') {
            return text.split('').map((char, index) => (
                <span key={index} style={{ display: 'inline-block', overflow: 'hidden', whiteSpace: char === ' ' ? 'pre' : 'normal', paddingBottom: '0.1em' }}>
                    <span className="char" style={{ display: 'inline-block', transformOrigin: 'bottom' }}>{char}</span>
                </span>
            ));
        } else {
            return text.split(' ').map((word, index) => (
                <span key={index} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em', paddingBottom: '0.1em' }}>
                    <span className="word" style={{ display: 'inline-block', transformOrigin: 'bottom' }}>{word}</span>
                </span>
            ));
        }
    };

    return (
        <div ref={textRef} style={{...style, display: 'inline-block'}} className={className}>
            {renderText()}
        </div>
    );
};

export default SplitText;
