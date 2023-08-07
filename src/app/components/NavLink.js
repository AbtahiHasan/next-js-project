"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'

const NavLink = ({activeLink, className, href, children}) => {
    const path = usePathname()
    const isActive = path === href
    return (
        <Link className={isActive ? activeLink : className} href={href}>
            {children}
        </Link>
    );
};

export default NavLink;