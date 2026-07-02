import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Magnetic({ children }) {
    const magnetic = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            
            // Adjust the pull strength (0.35 means it moves 35% towards the cursor)
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        const mouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        const el = magnetic.current;
        if(el) {
            el.addEventListener("mousemove", mouseMove);
            el.addEventListener("mouseleave", mouseLeave);
        }

        return () => {
            if(el) {
                el.removeEventListener("mousemove", mouseMove);
                el.removeEventListener("mouseleave", mouseLeave);
            }
        };
    }, []);

    return React.cloneElement(children, { ref: magnetic });
}
