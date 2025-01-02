import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const CartItemsList = () => {

   const {cartItems} = useSelector(state=>state.cartState);

	return (
		<div>
			{cartItems.map((item) => {
				return <CartItem key={item.cartID} cartItem={item}/>
			})}
		</div>
	);
};

export default CartItemsList;
