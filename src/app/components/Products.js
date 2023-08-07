import getProduct from "@/utils/getProduct";
import ProductCard from "./ProductCard";


const Products = async () => {
    const products = await getProduct()
    return (
        <section className="grid md:grid-cols-3 gap-5 container">
            {
                products.map((product) => <ProductCard key={product.id} product={product}/>)
            }
        </section>
    );
};

export default Products;