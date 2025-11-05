"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Nav from '../../components/Nav';
import { Footer } from "../../sections";

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname() ?? "";
    const isActive = (p: string) => pathname === `/reference${p}` || pathname.endsWith(p);
    const linkClass = (p: string) =>
        `px-2 py-1 rounded ${isActive(p) ? "underline font-semibold text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:underline"}`;

    return (
        <main className="relative bg-white dark:bg-gray-900">
            <Nav />
            <section className="px-56" id="title">
                <div className="flex pt-32 pb-8 px-4 mx-auto max-w-screen-xl lg:px-6 gap-4 flex-col">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">Flowdy Character Information</h2>
                    <p className="mb-8 text-gray-500 sm:text-lg dark:text-gray-400 font-ibm">Reference Sheets and Basic Information about Flowdy</p>
                </div>
            </section>
            <div className="max-w-6xl mx-auto p-6">
                <nav className="flex gap-3 mb-6">
                    <Link href="/reference/sfw" className={linkClass("/sfw")}>
                        SFW
                    </Link>
                    <Link href="/reference/nsfw" className={linkClass("/nsfw")}>
                        NSFW
                    </Link>
                </nav>

                <main className="pb-12">{children}</main>
            </div>
            <section className="padding-x py-2 bg-gray-900 dark:bg-gray-950">
            <Footer />
            </section>
        </main>
    );
}