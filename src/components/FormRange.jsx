import {priceFormat} from "../utils";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
const FormRange = ({label, name, size, price}) => {
	const step = 1000;
	const maxPrice = 100000;
	const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

	return (
		<div className="form-control">
			<label className="label cursor-pointer" htmlFor={name}>
				<span className="label-text capitalize">{label}</span>
				<span>{priceFormat(selectedPrice)}</span>
			</label>
			<input
				type="range"
				name={name}
				min={0}
				max={maxPrice}
				value={selectedPrice}
				step={step}
				className={`range range-primary ${size}`}
				onChange={(e) => setSelectedPrice(e.target.value)}
			/>
			<div className="w-full flex justify-between text-xs px-2 mt-2">
				<span className="font-bold text-md">0</span>
				<span className="font-bold text-md">Max: {priceFormat(maxPrice)}</span>
			</div>
		</div>
	);
};

export default FormRange;
