import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const LightBackground = ({ theme }) => {
    const bgRef = useRef();
    const shapesRef = useRef([]);

    useGSAP(() => {
        if (theme !== 'light') return;

        // Scroll-tied parallax for shapes
        gsap.to(shapesRef.current, {
            y: (i) => -150 * (i + 1), // Different speed for each shape for parallax effect
            ease: 'none',
            scrollTrigger: {
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
            }
        });
        
        // Continuous subtle floating animation
        shapesRef.current.forEach((shape, i) => {
            gsap.to(shape, {
                y: `+=${30 + i * 15}`,
                x: `+=${20 + i * 10}`,
                rotation: 15 + i * 5,
                duration: 6 + i * 1.5,
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut',
                delay: i * 0.5
            });
        });
    }, { dependencies: [theme], scope: bgRef });

    return (
        <div 
            ref={bgRef} 
            className={`light-parallax-bg ${theme === 'light' ? 'active' : ''}`}
        >
            <div className="grid-overlay"></div>
            <div 
                ref={el => shapesRef.current[0] = el} 
                className="parallax-shape shape-1"
            ></div>
            <div 
                ref={el => shapesRef.current[1] = el} 
                className="parallax-shape shape-2"
            ></div>
            <div 
                ref={el => shapesRef.current[2] = el} 
                className="parallax-shape shape-3"
            ></div>
        </div>
    );
};

export default LightBackground;
