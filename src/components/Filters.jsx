import FormInput from "./FormInput";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";
import FormCheckbox from "./FormCheckbox";
import {Form, useLoaderData, Link} from "react-router-dom";

const Filters = () => {
	const {meta, params} = useLoaderData();
	const categories = meta.categories;
	const companies = meta.companies;
	const {search, company, category, shipping, order, price} = params;

	return (
		<Form className="bg-base-200 rounded-md px-8 py-8 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
			<FormInput
				type="search"
				label="Search Product"
				name="search"
				size="input-sm"
				defaultValue={search}
			/>
			<FormSelect
				type="select"
				label="Select Category"
				name="category"
				size="input-sm"
				list={categories}
				defaultValue={category}
			/>
			<FormSelect
				type="select"
				label="Select Company"
				name="company"
				size="input-sm"
				list={companies}
				defaultValue={company}
			/>
			<FormSelect
				label="sort by"
				name="order"
				size="input-sm"
				list={["a-z", "z-a", "high", "low"]}
				defaultValue={order}
			/>
			<FormRange
				label="selected price"
				step="10"
				size="range-sm"
				price={price}
			/>
			<FormCheckbox
				label="free shipping"
				name="shipping"
				size="checkbox-sm"
				defaultValue={shipping}
			/>
			<button type="submit" className="btn btn-primary btn-sm">
				Search
			</button>
			<Link to="/products" className="btn btn-accent btn-sm">
				Reset
			</Link>
		</Form>
	);
};

export default Filters;
