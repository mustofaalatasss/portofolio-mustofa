import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        // Use gsap.quickTo for instant high performance mouse tracking
        const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.05, ease: "none" });
        const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.05, ease: "none" });

        const onMouseMove = (e) => {
            xToCursor(e.clientX);
            yToCursor(e.clientY);
        };

        window.addEventListener('mousemove', onMouseMove);

        // Event delegation for hover states
        const onMouseOver = (e) => {
            if (e.target.closest('a, button, .hover-target, .value-card, .tech-tag, .project-card, input, textarea, select')) {
                gsap.to('.custom-cursor-shape', { 
                    scale: 3.5, 
                    backgroundColor: 'transparent',
                    borderColor: 'var(--accent-color)',
                    rotate: 90, // Spins to a square
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            }
        };

        const onMouseOut = (e) => {
            if (e.target.closest('a, button, .hover-target, .value-card, .tech-tag, .project-card, input, textarea, select')) {
                gsap.to('.custom-cursor-shape', { 
                    scale: 1, 
                    backgroundColor: 'var(--accent-color)',
                    borderColor: 'transparent',
                    rotate: 45, // Back to diamond
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        };

        document.addEventListener('mouseover', onMouseOver);
        document.addEventListener('mouseout', onMouseOut);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseout', onMouseOut);
        };
    }, []);

    return (
        <div ref={cursorRef} className="custom-cursor-wrapper">
            <div className="custom-cursor-shape"></div>
        </div>
    );
};

export default Cursor;
