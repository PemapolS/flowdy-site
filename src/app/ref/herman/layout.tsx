"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Nav from '../../../components/Nav';
import { Footer } from "../../../sections";

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname() ?? "";
    const isActive = (p: string) => pathname === `/ref/herman/${p}` || pathname.endsWith(p);
    const linkClass = (p: string) => {
        const base =
            "flex justify-center items-center gap-2 px-7 py-4 font-ibm font-medium text-lg leading-none rounded-2xl transition duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-400";
        const active = "bg-purple-400 dark:bg-fuchsia-900 text-white shadow-md";
        const inactive =
            "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-fuchsia-950 hover:shadow-sm active:scale-95";
        return `${base} ${isActive(p) ? active : inactive}`;
    };

    return (
        <main className="relative bg-white dark:bg-gray-900 min-h-screen flex flex-col">
            <Nav />
            <section className="bg-header-ref-herman bg-cover bg-top" id="title">
                <div className="px-8 md:px-20 lg:px-60 backdrop-blur-sm">
                    <div className="flex pt-32 pb-6 mx-auto max-w-screen-xl gap-4 flex-col">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white font-ibm">Herman Character Information</h2>
                        <p className="mb-8 sm:text-lg text-gray-700 font-ibm">Reference Sheets and Basic Information about Herman</p>
                    </div>
                </div>
            </section>
            <div className="py-6 px-8 md:px-20 lg:px-60 flex-1">
                <nav className="flex mx-auto max-w-screen-xl gap-2">
                    <Link href="/ref/herman/sfw" className={linkClass("/sfw")}>
                        SFW
                    </Link>
                    <Link href="/ref/herman/nsfw" className={linkClass("/nsfw")}>
                        NSFW
                    </Link>
                </nav>
                <main className="mt-6">{children}</main>
            </div>
            <section className="padding-x py-2 bg-gray-900 dark:bg-gray-950">
                <Footer />
            </section>
        </main>
    );
}