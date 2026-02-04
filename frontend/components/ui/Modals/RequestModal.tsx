"use client";

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
    return (
        <div className={`modal ${isActive ? "active" : ""}`}>
            <div className="modal__wrapper">
                <div className="modal__header">
                    <Link href="/" className="logo logo_black" />

                    <button
                        className="modal__close-btn"
                        type="button"
                        title="Закрыть модальное окно"
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
                        <FormInput
                            value={""}
                            placeholder={""}
                            isError={false}
                            onChange={(val) => console.log(val)}
                        />

                        <FormPhoneInput
                            value={""}
                            placeholder={""}
                            isError={false}
                            onChange={(val) => console.log(val)}
                        />

                        <FormTextarea
                            value={""}
                            placeholder={""}
                            isError={false}
                            onChange={(val) => console.log(val)}
                        />

                        <div>
                            <ButtonAction
                                label="Отправить"
                                title="Отправить заявку"
                                onClick={() => console.log("click")}
                            />

                            <div>
                                Нажимая кнопку, я соглашаюсь на
                                <a href="#">
                                    обработку моих персональных данных
                                </a>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="modal__footer">
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
