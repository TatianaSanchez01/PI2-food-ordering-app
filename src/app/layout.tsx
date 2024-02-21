import type { Metadata } from "next";
import { Imprima } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
const imprima = Imprima({
    weight: ["400"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DeliFusión",
    description: "Food Ordering App",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={imprima.className}>
                <main className="max-w-5xl p-4 mx-auto">
                    <Header />
                    {children}
                    <footer className="border-t-2 p-8 text-center text-black/80 mt-16">
                        &copy; {new Date().getFullYear()} Todos los derechos
                        reservados
                    </footer>
                </main>
            </body>
        </html>
    );
}
