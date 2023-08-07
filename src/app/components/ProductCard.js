import Image from "next/image";
import Link from "next/link";


const ProductCard = ({product}) => {
    const {id, name, price, image} = product
    return (
        <article className="text-center p-7 border rounded-md w-full  ">
            <div className="w-full h-[300px] relative">
            <Image src={image} fill={true} alt={name} />

            </div>
            <h2 className="text-2xl my-3">{name}</h2>
            <p>{price}</p>
            <Link className="bg-indigo-700 px-6 py-2 rounded text-white mt-10 block" href={`/details/${id}`}>View Details</Link>
        </article>
    );
};

export default ProductCard;