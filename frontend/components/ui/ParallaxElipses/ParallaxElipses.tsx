// import { useEffect, useRef, useState } from "react";

import "./ParallaxElipses.scss";

// export default function ParallaxElipses() {
//     const blockRef = useRef(null);
//     const lastScrollY = useRef(0);
//     const [offsetX, setOffsetX] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             if (currentScrollY > lastScrollY.current) {
//                 setOffsetX((prev) => Math.max(prev - 1.5, -500));
//             } else {
//                 setOffsetX((prev) => Math.min(prev + 0.5, 0));
//             }

//             lastScrollY.current = currentScrollY;
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <div
//             ref={blockRef}
//             className="parallax"
//             style={{
//                 transform: `translateX(${offsetX}px)`,
//             }}
//         />
//     );
// }

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxElipses() {
    // 0 → верх страницы, 1 → низ
    const { scrollYProgress } = useScroll();

    // Преобразуем скролл в движение по X
    // 0   →  0px
    // 1   → -150px
    const x = useTransform(scrollYProgress, [0, 1], [0, -150]);

    // return (
    //     // <div style={{ height: "200vh", paddingTop: "100px" }}>
    //     //     {/* контейнер просто для пространства */}
    //     //     <motion.div
    //     //         className="parallax"
    //     //         style={{
    //     //             x, // вот тут магия
    //     //             width: "400px",
    //     //         }}
    //     //     />
    //     // </div>
    // );
}
