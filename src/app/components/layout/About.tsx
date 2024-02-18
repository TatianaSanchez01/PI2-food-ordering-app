import React from "react";
import SectionSubheader from "./SectionSubheader";
function About() {
    return (
        <section id="about" className="my-16">
            <SectionSubheader
                subHeader="Nuestra historia"
                mainHeader="Sobre nosotros"
            />
            <div className="text-center my-4 text-black max-w-md mx-auto flex-col gap-4">
                <p className="leading-7 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta asperiores, quos quam maxime quod molestiae laboriosam
                    ullam tempore quisquam fugiat sed ratione voluptatibus
                    placeat, sit neque vero odit aperiam sint?
                </p>
                <p className="leading-7 my-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officiis inventore provident vero in fugit doloremque
                    eligendi, ea doloribus labore consequuntur quod laudantium
                    voluptas voluptatem facilis! Iure harum fugit ad esse!
                </p>
            </div>
        </section>
    );
}

export default About;
