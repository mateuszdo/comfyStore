import {useSelector} from "react-redux";
import {priceFormat} from "../utils";

const CartTotals = () => {
	const {cartTotal, shipping, tax, orderTotal} = useSelector(
		(state) => state.cartState
	);

	return (
		<div className="card bg-base-200">
			<div className="card-body">
				<p className="flex justify-between text-xs border-b border-base-300 pb-2">
					<span>Subtotal</span>
					<span>{priceFormat(cartTotal)}</span>
				</p>
				<p className="flex justify-between text-xs border-b border-base-300 pb-2">
					<span>Shipping</span>
					<span>{priceFormat(shipping)}</span>
				</p>
				<p className="flex justify-between text-xs border-b border-base-300 pb-2">
					<span>Tax</span>
					<span>{priceFormat(tax)}</span>
				</p>
				<p className="mt-4 flex justify-between text-sm pb-2">
					<span className="font-bold">OrderTotal</span>
					<span className="font-bold">{priceFormat(orderTotal)}</span>
				</p>
			</div>
		</div>
	);
};

export default CartTotals;
