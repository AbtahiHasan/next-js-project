import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
const SideProductCard = ({product}) => {
 
    const {id, name, image} = product
    return (
        <NavLink href={`/details/${id}`} activeLink="text-center flex items-center bg-indigo-700 text-white p-1 flex gap-3 border rounded-md w-full px-3 " className=" px-3 text-center p-1 flex gap-3 border rounded-md w-full items-center ">

            <h2 className="text-xl">{name}</h2>
          

        </NavLink>
    );

};

export default SideProductCard;





