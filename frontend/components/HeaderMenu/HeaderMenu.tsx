"use client";

import Image from "next/image";
import Menu from "../Menu/Menu";
import ButtonAction from "../ui/buttons/ButtonAction";

import Close from "@/assets/icons/close.svg";

import "./HeaderMenu.scss";

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
                    <button
                        type="button"
                        className="header-menu__close-btn"
                        title="Закрыть меню"
                        onClick={() => setIsActive(false)}
                    >
                        <Image src={Close} alt="X" width={91} height={28} />
                    </button>
                </div>

                <div className="menu-wrapper__body">
                    <Menu />

                    <ButtonAction
                        label="Обсудить проект"
                        className="menu__button-action"
                        onClick={() => console.log("Обсудить проект")}
                    />
                </div>
            </div>
        </div>
    );
}
