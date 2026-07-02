import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }) => {
    const containerRef = useRef(null);
    const topCurtainRef = useRef(null);
    const bottomCurtainRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // Lock scroll
        document.body.style.overflow = 'hidden';

        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = 'auto'; // Unlock scroll
                if (onComplete) onComplete();
            }
        });

        // 1. Text fades in and spaces out slightly
        tl.to(textRef.current, {
            opacity: 1,
            letterSpacing: '15px',
            duration: 1.5,
            ease: 'power3.out',
            delay: 0.5
        });

        // 2. Curtains open up and down
        tl.to(topCurtainRef.current, {
            y: '-100%',
            duration: 1.2,
            ease: 'power4.inOut'
        }, "+=0.5")
        .to(bottomCurtainRef.current, {
            y: '100%',
            duration: 1.2,
            ease: 'power4.inOut'
        }, "<")
        // Hide the text simultaneously
        .to(textRef.current, {
            opacity: 0,
            scale: 1.5,
            duration: 1.2,
            ease: 'power4.inOut'
        }, "<")
        // Finally, hide the entire container
        .to(containerRef.current, {
            autoAlpha: 0,
            duration: 0.1
        });

        return () => {
            document.body.style.overflow = 'auto'; // Cleanup
        };
    }, [onComplete]);

    return (
        <div 
            ref={containerRef}
            className="loading-screen"
        >
            <div ref={topCurtainRef} className="curtain curtain-top"></div>
            <div ref={bottomCurtainRef} className="curtain curtain-bottom"></div>
            <div className="loading-text-wrapper">
                <h1 ref={textRef} className="loading-text">MUSTOFA</h1>
            </div>
        </div>
    );
};

export default LoadingScreen;
