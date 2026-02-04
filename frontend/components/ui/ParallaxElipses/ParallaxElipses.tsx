import { useEffect, useRef, useState } from "react";

import "./ParallaxElipses.scss";

export default function ParallaxElipses() {
    const blockRef = useRef(null);
    const lastScrollY = useRef(0);
    const [offsetX, setOffsetX] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                setOffsetX((prev) => Math.max(prev - 1, -500));
            } else {
                setOffsetX((prev) => Math.min(prev + 0.5, 0));
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={blockRef}
            className="parallax"
            style={{
                transform: `translateX(${offsetX}px)`,
            }}
        />
    );
}
