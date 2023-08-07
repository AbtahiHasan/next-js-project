import NavLink from "./NavLink";


const Navbar = () => {
    return (
        <nav className=" shadow-sm">
            <section className="container flex justify-between items-center  py-3">
                <h2 className="text-2xl font-bold">NextSimple</h2>
                <ul className="flex gap-3 items-center">
                    <li><NavLink activeLink="font-bold uppercase underline" className="uppercase" href="/">Home</NavLink></li>
                    <li><NavLink activeLink="font-bold uppercase underline" className="uppercase" href="/details/1">Details</NavLink></li>
                </ul>
            </section>
        </nav>
    );
};

export default Navbar;