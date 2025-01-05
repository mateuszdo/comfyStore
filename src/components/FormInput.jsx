// eslint-disable-next-line react/prop-types
const FormInput = ({name, label, type, defaultValue, size}) => {
	return (
		<label className="form-control">
			<div className="label">
				<span className="label-text">{label}</span>
			</div>
			<input
				type={type}
				name={name}
				defaultValue={defaultValue}
				placeholder=""
				className={`input input-bordered ${size}`}
			/>
		</label>
	);
};

export default FormInput;
