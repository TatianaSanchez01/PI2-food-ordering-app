import type { Metadata } from "next";
import { Imprima } from "next/font/google";
import "./globals.css";

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
                <main className="max-w-4xl p-4 mx-auto">{children}</main>
            </body>
        </html>
    );
}
