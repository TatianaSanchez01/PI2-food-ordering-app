import React from "react";
import { FcGoogle } from "react-icons/fc";
function RegisterPage() {
    return (
        <section className="my-16">
            <h1 className="text-center text-orange text-4xl mb-4">Register</h1>
            <form className="block max-w-sm mx-auto ">
                <input type="email" placeholder="Correo" />
                <input type="password" placeholder="Contraseña" />
                <button type="submit">Registrarme</button>
                <div className="my-4 text-center text-black/70 gap-4">
                    <p className="my-2">o regístrate con el proveedor</p>
                    <button className="flex items-center justify-center">
                        <FcGoogle />
                        Login with Goggle
                    </button>
                </div>
            </form>
        </section>
    );
}

export default RegisterPage;
