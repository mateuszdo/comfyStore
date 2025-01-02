import {useLoaderData} from "react-router-dom";
import {useState} from "react";
import ProductList from "./ProductList";
import ProductsGrid from "./ProductsGrid";
import {BsFillGridFill, BsList} from "react-icons/bs";

const ProductsContainer = () => {
	const [layout, setLayout] = useState("grid");
	const {meta} = useLoaderData();
	const {total} = meta.pagination;
	//console.log(total);

	const setActiveStyles = (pattern) => {
		return `text-xl btn btn-circle btn-sm ${
			pattern === layout ? "btn-primary text-primary-content" : "btn-ghost"
		}`;
	};

	return (
		<>
			<div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
				<h4 className="capitalize tracking-wider font-medium text-md">
					{total} {total > 1 ? "products" : "product"}
				</h4>
				<div className="flex gap-x-2">
					<button
						type="button"
						className={setActiveStyles("grid")}
						onClick={() => setLayout("grid")}
					>
						<BsFillGridFill />
					</button>
					<button
						type="button"
						className={setActiveStyles("list")}
						onClick={() => setLayout("list")}
					>
						<BsList />
					</button>
				</div>
			</div>
			<div>
				{total === 0 ? (
					<h5 className="text-2xl mt-16">
						Sorry, no products found for your search...
					</h5>
				) : layout === "grid" ? (
					<ProductsGrid />
				) : (
					<ProductList />
				)}
			</div>
		</>
	);
};

export default ProductsContainer;
