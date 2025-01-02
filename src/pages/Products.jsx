import { useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils/index';
import { Filters, PaginationContainer, ProductsContainer } from '../components';

const url = '/products';
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async({request}) => {
	const params = Object.fromEntries([
		...new URL(request.url).searchParams.entries()
	])
	console.log(params);
	
	const response = await customFetch(url, {params});
	const products = response.data.data;
	const meta = response.data.meta;
   return {products, meta, params};
}

const Products = () => {
	const products = useLoaderData(loader);
	console.log(products);
	
	return <>
	<Filters />
	<ProductsContainer />
	<PaginationContainer />
	</>;
};

export default Products;
