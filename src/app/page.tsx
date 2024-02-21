import Link from "next/link";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionSubheader from "./components/layout/SectionSubheader";
import About from "./components/layout/About";
export default function Home() {
    return (
        <>
            
            <Hero />
            <HomeMenu />
            <About />
            <section id="contact" className="my-16 text-center">
                <SectionSubheader
                    subHeader="No dudes"
                    mainHeader="Contáctanos"
                />
                <div className="mt-8">
                    <a
                        href="tel:+573056248595"
                        className="text-black font-bold text-center text-4xl hover:underline hover:underline-offset-8"
                    >
                        +57 305 624 8595
                    </a>
                </div>
            </section>
            
        </>
    );
}
