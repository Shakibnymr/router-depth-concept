
import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard/ProductsCard";


const Products = () => {
    const products = useLoaderData()
    const realProducts = products.products
    console.log(realProducts,products)
    return (
        <div>
            {/* <h1 className="text-center text-3xl font-medium">Products Section</h1> */}

{
    realProducts.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
}

        </div>
    );
};

export default Products;