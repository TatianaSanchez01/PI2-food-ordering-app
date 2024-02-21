import React from "react";
import Link from "next/link";
const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <nav className="flex items-center gap-8 text-black/80 font-semibold ">
                <Link href="/" className="text-orange font-semibold text-2xl">
                    DeliFusión
                </Link>
                <Link className="hover:text-black" href={"/"}>
                    Home
                </Link>
                <Link href={"/menu"} className="hover:text-black">
                    Menu
                </Link>
                <Link href={""} className="hover:text-black">
                    Nosotros
                </Link>
                <Link href={""} className="hover:text-black">
                    Contacto
                </Link>
            </nav>
            <nav className="flex items-center gap-8 text-dark/80">
                <Link href={"/login"}>Iniciar Sesión</Link>
                <Link
                    href={"/register"}
                    className="bg-orange text-white rounded-xl px-6 py-2 hover:bg-darkOrange transition duration-300"
                >
                    Registro
                </Link>
            </nav>
        </header>
    );
};

export default Header;
