import React from "react";
import Image from "next/image";
import pizzaImage from "../../../../public/assets/images/pizza.png";

function MenuItem() {
    return (
        <div className="bg-gray-300 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all group">
            <div className="text-center">
                <Image src={pizzaImage} alt="menu item" priority className="max-h-auto max-h-24 block mx-auto"/>
            </div>
            <h4 className="font-semibold text-xl my-3 text-black">
                Pizza de Pepperoni
            </h4>
            <p className="text-black/80 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-4 bg-orange text-white rounded-full px-6 py-2 hover:bg-darkOrange transition duration-300">
                Agregar al carrito por $25.000
            </button>
        </div>
    );
}

export default MenuItem;
