import { useForm } from "react-hook-form";

import "./RegisterForm.scss";

const RegisterForm = () => {
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
		<form onSubmit={handleSubmit(onSubmit)} className="form register__form">
			<label>
				<input
					className="form__input"
					placeholder="ФИО ребёнка"
					type="text"
					{...register("name", {
						required: "Поле обязательно к заполнению",
						minLength: {
							value: 5,
							message: "Минимум 5 символов",
						},
					})}
				/>
				{errors?.name && (
					<div className="form__error"> {errors?.name?.message}</div>
				)}
			</label>

			<label>
				<input
					className="form__input"
					placeholder="Дата рождения"
					type="text"
					{...register("date", {
						required: "Поле обязательно к заполнению",
						pattern: {
							value: /^\d{2}\.\d{2}\.\d{4}$/,
							message: "Укажите дату в формате ДД.ММ.ГГГГ",
						},
					})}
				/>
				{errors?.date && (
					<div className="form__error"> {errors?.date?.message}</div>
				)}
			</label>

			<label>
				<input
					className="form__input"
					placeholder="Город"
					type="text"
					{...register("city", {
						required: "Поле обязательно к заполнению",
						minLength: {
							value: 3,
							message: "Минимум 3 символа",
						},
					})}
				/>
				{errors?.city && (
					<div className="form__error"> {errors?.city?.message}</div>
				)}
			</label>

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
					<div className="form__error"> {errors?.email?.message}</div>
				)}
			</label>

			<label>
				<input
					className="form__input"
					placeholder="Пароль"
					type="password"
					{...register("password", {
						required: "Поле обязательно к заполнению",
						minLength: {
							value: 5,
							message: "Пароль не может быть короче 5 символов",
						},
					})}
				/>
				{errors?.password && (
					<div className="form__error"> {errors?.password?.message}</div>
				)}
			</label>

			<label className="checkbox register__form-checkbox">
				<input
					type="checkbox"
					value="confirm policy"
					{...register("policy", {
						required:
							"Необходимо ваше согласие с условиями и политикой обработки данных",
					})}
				/>
				<div className="checkbox__wrap">
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
					<div className="form__error">{errors?.policy?.message}</div>
				)}
			</label>

			<button className="button button_register register__button">
				Участвовать
			</button>
		</form>
	);
};

export default RegisterForm;
