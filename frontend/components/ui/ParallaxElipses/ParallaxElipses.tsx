import "./ParallaxElipses.scss";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxElipses() {
    const { scrollYProgress } = useScroll();

    // Преобразуем скролл в движение по X
    // 0 - 0px
    // 1 - -150px
    const x = useTransform(scrollYProgress, [0, 1], [0, -600]);

    return (
        <motion.div
            className="parallax"
            style={{
                x,
            }}
        />
    );
}
