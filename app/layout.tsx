import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ertuğrul Gökay Duman | Full Stack Developer",
    description: "Junior .NET & Full Stack Developer Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr" className="dark">
            <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased")}>
                <Navbar />
                <main className="min-h-screen flex flex-col">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
