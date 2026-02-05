"use client";

import { useState } from "react";

import { useRequestModal } from "@/components/RequestModalContext";

import Link from "next/link";
import ButtonAction from "../Buttons/ButtonAction";
import FormInput from "../Form/FormInput";
import FormPhoneInput from "../Form/FormPhoneInput";
import FormTextarea from "../Form/FormTextarea";

import "./Modals.scss";

export default function RequestModal({
    isActive = false,
}: {
    isActive: boolean;
}) {
    const { close } = useRequestModal();

    const [modalData, setModalData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const [isError, setIsError] = useState({
        name: false,
        phone: false,
    });

    const handleValidate = () => {
        const errors = {
            name: !modalData.name?.trim(),
            phone:
                !modalData.phone?.trim() || modalData.phone?.trim().length < 18,
        };

        setIsError(errors);

        return !Object.values(errors).some(Boolean);
    };

    const handleSubmit = () => {
        if (!handleValidate()) return;
    };

    const handleChange = (name, value) => {
        setModalData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className={`modal ${isActive ? "active" : ""}`} onClick={close}>
            <div
                className="modal__wrapper"
                onClick={(evt) => evt.stopPropagation()}
            >
                <div className="modal__header">
                    <Link href="/" className="logo logo_black" />

                    <button
                        className="modal__close-btn"
                        type="button"
                        title="Закрыть модальное окно"
                        onClick={close}
                    ></button>
                </div>

                <div className="modal__body">
                    <div className="modal__title">
                        Расскажите <br /> о вашем проекте
                    </div>
                    <div className="modal__subtitle">
                        Кратко опишите свою задачу, и мы свяжемся с вами в
                        кратчайшие сроки
                    </div>

                    <form className="modal-form">
                        <div className="flex-row">
                            <FormInput
                                htmlFor="name"
                                value={modalData.name}
                                placeholder="Имя*"
                                isError={isError.name}
                                type="text"
                                onChange={(val) => handleChange("name", val)}
                            />

                            <FormPhoneInput
                                htmlFor="phone"
                                value={modalData.phone}
                                placeholder="Телефон*"
                                isError={isError.phone}
                                onChange={(val) => handleChange("phone", val)}
                            />
                        </div>

                        <FormTextarea
                            value={modalData.message}
                            placeholder="Сообщение"
                            onChange={(val) => handleChange("message", val)}
                        />

                        {Object.values(isError).some(Boolean) && (
                            <div className="message message_error">
                                Заполните важные поля*
                            </div>
                        )}

                        <div className="modal-form__action">
                            <ButtonAction
                                label="Отправить"
                                title="Отправить заявку"
                                onClick={handleSubmit}
                            />

                            <div className="modal-form__agreement">
                                Нажимая кнопку, я соглашаюсь <br /> на
                                <a href="#">
                                    обработку моих персональных данных
                                </a>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="modal__footer">
                    <Link href="/" className="logo logo_black" />

                    <a
                        href="https://t.me/bizanpro"
                        className="modal__footer-link"
                        target="_blank"
                    >
                        t.me/bizanpro
                    </a>

                    <a
                        href="mailto:hi@bizan.pro"
                        className="modal__footer-link"
                    >
                        hi@bizan.pro
                    </a>
                </div>
            </div>
        </div>
    );
}
