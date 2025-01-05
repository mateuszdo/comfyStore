import {priceFormat} from "../utils";
import {Form, redirect} from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import {toast} from "react-toastify";
import {clearCart} from "../features/cart/cartSlice";
import {customFetch} from "../utils";

// eslint-disable-next-line react-refresh/only-export-components
export const action =
	(store, queryClient) =>
	async ({request}) => {
		const formData = await request.formData();
		const {name, address} = Object.fromEntries(formData);
		const user = store.getState().userState.user;
		const {cartItems, orderTotal, numItemsInCart} = store.getState().cartState;

		const info = {
			name,
			address,
			chargeTotal: orderTotal,
			orderTotal: priceFormat(orderTotal),
			cartItems,
			numItemsInCart,
		};
		try {
			// eslint-disable-next-line no-unused-vars
			const response = await customFetch.post(
				"/orders",
				{data: info},
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			// remove query
			queryClient.removeQueries(['orders']);
			
			store.dispatch(clearCart());
			toast.success("order placed successfully");
			return redirect("/orders");
		} catch (error) {
			//console.log(error);
			const errormessage =
				error?.response?.data?.error?.message ||
				"there was an error placing your order";
			toast.error(errormessage);
			if(error?.response?.status === 401) {
				return redirect('/login');
			}
			return null;
		}
	};

const CheckoutForm = () => {
	return (
		<Form method="POST" className="flex flex-col gap-y-4">
			<h4 className="font-medium text-xl">Shipping Information</h4>
			<FormInput label="First name" name="name" type="text" />
			<FormInput label="Address" name="address" type="text" />
			<div className="mt-4">
				<SubmitBtn text="Place Your Order" />
			</div>
		</Form>
	);
};

export default CheckoutForm;
