/* eslint-disable react-refresh/only-export-components */
import {FeaturedProducts, Hero} from "../components/index";
import { customFetch } from "../utils";

const url = '/products?featured';


export const loader = async () => {
	const response = await customFetch(url);
	const products = response.data.data
	return {products};
}

const Landing = () => {
	return (
		<>
			<Hero />
			<FeaturedProducts />
		</>
	);
};

export default Landing;
