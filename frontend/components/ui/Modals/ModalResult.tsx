import Image from "next/image";

import Success from "@/assets/icons/success.svg";
import Mail from "@/assets/icons/mail-problem.svg";

export default function ModalResult({
    type = "success",
}: {
    type: "success" | "error";
}) {
    return (
        <div className="modal-result">
            {type === "success" ? (
                <>
                    <div className="image modal-result__icon">
                        <Image src={Success} alt="Заявка отправлена" />
                    </div>

                    <b>
                        Спасибо за заявку, мы свяжемся <br /> с вами в ближайшее
                        время!
                    </b>
                </>
            ) : (
                <>
                    <div className="image modal-result__icon">
                        <Image src={Mail} alt="Не удалось отправить заявку" />
                    </div>

                    <b>Не удалось отправить заявку</b>

                    <p>
                        Проверьте подключение к сети <br /> и попробуйте
                        отправить заявку снова.
                    </p>
                    <p>
                        Если проблема не исчезла, свяжитесь с нами через почту
                        <a href="mailto:">hi@bizan.pro</a>
                    </p>
                </>
            )}
        </div>
    );
}
