import { useForm } from "react-hook-form";

import './MailingForm.scss'

const MailingForm = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur",
        reValidateMode: "onBlur",
    });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form mailing__form ">
            <label>
                <input
                    className="form__input"
                    placeholder="Email"
                    type="text"
                    {...register("email", {
                        required: "Поле обязательно к заполнению",
                        pattern: {
                            value:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Укажите email в формате email@example.ru",
                        },
                    })}
                />
                {errors?.email && (
                    <div className="form__error mailing__error-mail"> {errors?.email?.message}</div>
                )}
            </label>
            <label className="checkbox">
                <input
                    type="checkbox"
                    value="confirm policy"
                    {...register("policy", {
                        required:
                            "Необходимо ваше согласие с условиями и политикой обработки данных",
                    })}
                />
                <div className="checkbox__wrap mailing__policy">
                    {" "}
                    <p>
                        Отправляя данные я соглашаюсь с{" "}
                        <span className="bold">
                            {" "}
                            <a href="/"> Условиями конкурса</a> и{" "}
                            <a href="/">Политикой обработки данных</a>
                        </span>
                    </p>{" "}
                </div>
                {errors?.policy && (
                    <div className="form__error mailing__error-policy">{errors?.policy?.message}</div>
                )}
            </label>
            <button className="button button_mailing mailing__button">
                Отправить
            </button>
        </form>
    )
}

export default MailingForm