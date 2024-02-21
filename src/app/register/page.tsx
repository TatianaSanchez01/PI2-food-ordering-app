"use client";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);

    async function checkEmailAvailability(email: String) {
        try {
            const response = await fetch("/api/check-email", {
                method: "POST",
                body: JSON.stringify({ email }),
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error("Error al verificar la existencia del correo");
            }

            const data = await response.json();

            if (!data.available) {
                setErrorMessage(
                    "El correo ya está registrado. Introduzca uno diferente."
                );
                return false;
            }
            return true;
        } catch (error) {
            console.error(error);
            setErrorMessage("Error al comprobar la disponibilidad del correo.");
            return false;
        }
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setCreatingUser(true);
        try {
            const body = { name, email, password };
            if (password.length < 5) {
                setErrorMessage(
                    "La contraseña debe tener al menos 5 caracteres"
                );
                setCreatingUser(false);
                setUserCreated(false);
                return;
            }
            if (!(await checkEmailAvailability(email))) {
                setCreatingUser(false);
                setUserCreated(false);
                return;
            }
            await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" },
            });
            setCreatingUser(false);
            setUserCreated(true);
            setErrorMessage("");
        } catch (error: any) {
            setErrorMessage("Hubo un error, inténtelo nuevamente");
            console.log(error);
        }
    };

    return (
        <section className="my-16">
            <h1 className="text-center text-orange text-4xl mb-4">Registro</h1>
            {userCreated && (
                <div className="my-4 text-center">
                    El usuario fue creado éxitosamente <br />
                    <Link
                        href="/login"
                        className="underline underline-offset-4 text-orange font-medium"
                    >
                        Iniciar Sesión &raquo;
                    </Link>
                </div>
            )}
            <form className="block max-w-sm mx-auto " onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={creatingUser}
                />
                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={creatingUser}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={creatingUser}
                />
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <button type="submit" disabled={creatingUser}>
                    Registrarme
                </button>
                <div className="my-4 text-center text-black/70 gap-4">
                    <p className="my-2">o regístrate con el proveedor</p>
                    <button className="flex items-center justify-center">
                        <FcGoogle />
                        Iniciar sesión con Goggle
                    </button>
                </div>
                <div className="text-center my-4 text-black/80 border-t pt-4">Ya estás registrado? <Link href={"/login"} className="underline underline-offset-2 text-orange">Ingrese aquí &raquo;</Link></div>
            </form>
        </section>
    );
}

export default RegisterPage;
