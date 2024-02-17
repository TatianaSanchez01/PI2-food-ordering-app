import React from "react";
import Image from "next/image";
import heroImage from "../../../../public/assets/images/hero.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Hero() {
    return (
        <section className="grid grid-cols-2 my-16">
            <div className="">
                <h1 className="text-black text-6xl font-semibold">
                    Descubre un <span className="text-orange">festín</span> para
                    tus sentidos en cada{" "}
                    <span className="text-orange">bocado</span>
                </h1>
                <p className="mt-4 opacity-80 text-sm">
                    En nuestro santuario culinario, cada plato es una obra
                    maestra cuidadosamente elaborada con los mejores
                    ingredientes, fusionando sabores del mundo para deleitar tu
                    paladar y crear momentos inolvidables alrededor de la mesa.
                </p>
                <div className="w-full flex gap-5 mt-4">
                    <button className="bg-orange text-white text-sm font-semibold uppercase px-4 py-2 rounded-xl hover:bg-darkOrange transition duration-300 flex items-center gap-2">
                        Pide ahora <FaRegArrowAltCircleRight />
                    </button>
                    <button className="bg-transparent text-black font-semibold px-8 py-2 rounded-xl transition duration-300 flex items-center gap-2">
                        Conoce más
                        <FaRegArrowAltCircleRight />
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image
                    src={heroImage}
                    alt="hamburguer image"
                    layout="fill"
                    objectFit="contain"
                    priority
                />
            </div>
        </section>
    );
}

export default Hero;
