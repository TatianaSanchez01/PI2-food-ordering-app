import React from "react";
import Link from "next/link";
const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <Link href="#" className="text-orange font-semibold text-2xl">
                DeliFusión
            </Link>
            <nav className="flex items-center gap-8 text-black/80 font-semibold ">
                <Link className="hover:text-black" href={""}>
                    Home
                </Link>
                <Link href={""} className="hover:text-black">
                    Menu
                </Link>
                <Link href={""} className="hover:text-black">
                    Nosotros
                </Link>
                <Link href={""} className="hover:text-black">
                    Contacto
                </Link>
                <Link
                    href={""}
                    className="bg-white rounded-xl px-6 py-2 hover:text-white hover:bg-orange transition duration-300"
                >
                    Iniciar Sesión
                </Link>
            </nav>
        </header>
    );
};

export default Header;
