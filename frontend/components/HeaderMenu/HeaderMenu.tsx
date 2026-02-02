"use client";

import Image from "next/image";
import Menu from "../Menu/Menu";

import Close from "@/assets/icons/close.svg";

import "./HeaderMenu.scss";
import Link from "next/link";

export default function HeaderMenu({
    isActive,
    setIsActive,
}: {
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <div
            className={`header-menu ${isActive ? "active" : ""}`}
            onClick={() => setIsActive(false)}
        >
            <div
                className="header-menu__wrapper menu-wrapper"
                onClick={(evt) => evt.stopPropagation()}
            >
                <div className="menu-wrapper__header">
                    <Link href="/" className="menu-wrapper__logo">
                        <svg
                            width="83"
                            height="23"
                            viewBox="0 0 83 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M68.238 22.454V7.015h3.159v6.181H79v-6.18h3.187v15.438H79v-6.377h-7.603v6.377h-3.16zM48.95 14.79c0-4.698 3.354-8.139 7.939-8.139 2.376 0 4.025.811 5.367 2.657V7.015h2.963v15.439h-2.963v-2.238c-1.51 1.846-3.047 2.602-5.367 2.602-4.613 0-7.94-3.385-7.94-8.028zm3.186.028c0 2.937 2.153 5.09 5.088 5.09 2.907 0 4.976-2.153 4.976-5.146 0-3.02-2.153-5.202-5.116-5.202-2.823 0-4.948 2.266-4.948 5.258zM35.27 17.727h3.158c.112 1.259 1.23 2.182 2.656 2.182 1.481 0 2.655-.98 2.655-2.182 0-1.538-1.173-2.21-3.745-2.21v-2.209c2.18 0 3.186-.643 3.186-1.986 0-.979-.922-1.79-2.096-1.79-1.146 0-2.04.727-2.208 1.79h-3.02c.168-2.685 2.405-4.67 5.228-4.67 2.907 0 5.2 2.07 5.2 4.67 0 1.37-.867 2.545-2.209 2.909v.084c1.705.447 2.851 1.818 2.851 3.412 0 2.825-2.6 5.09-5.814 5.09-3.131 0-5.675-2.209-5.843-5.09zM18.964 22.454V7.015h3.159V17.98l7.715-10.964h3.215v15.44h-3.16V11.517l-7.715 10.936h-3.214zM2.628 9.873l.056.028c.866-1.874 3.729-1.937 5.531-1.517 4.068 0 6.643 1.628 6.643 4.202.349.28-1.397-3.496-6.569-3.492C1.58 9.09 0 19.761 0 14.055v-2.923C0 4.419 2.767 1.007 8.526.532L15.206 0v2.853l-6.512.56c-4.082.363-6.038 2.433-6.066 6.46z"
                                fill="#0D1019"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.429 22.793v-3.12h-.161a5.152 5.152 0 01-5.15-5.153 5.151 5.151 0 015.15-5.153 5.152 5.152 0 015.15 5.153v.162h3.117v-.162c0-4.568-3.701-8.272-8.267-8.272C3.702 6.248 0 9.952 0 14.52c0 4.569 3.702 8.273 8.268 8.273h.16z"
                                fill="#0D1019"
                            />
                            <ellipse
                                cx="13.611"
                                cy="19.867"
                                rx="2.935"
                                ry="2.937"
                                fill="#0D1019"
                            />
                        </svg>
                    </Link>

                    <button
                        type="button"
                        className="header-menu__close-btn image"
                        title="Закрыть меню"
                        onClick={() => setIsActive(false)}
                    >
                        <Image src={Close} alt="X" width={36} height={36} />
                    </button>
                </div>

                <div className="menu-wrapper__body">
                    <Menu />
                </div>
            </div>
        </div>
    );
}
