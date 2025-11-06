"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Nav from '../../components/Nav';
import { Footer } from "../../sections";
import { HS00_001_01, HS00_001_02, HS00_001_03 } from "../../../public/images";

export default function Page({ children }: { children?: React.ReactNode }) {
    const pathname = usePathname() ?? "";

    // small avatar component that falls back to initial if image fails
    function Avatar({ src, label }: { src?: string; label: string }) {
        const [ok, setOk] = React.useState(Boolean(src));
        React.useEffect(() => { setOk(Boolean(src)); }, [src]);

        return (
            <div className="relative w-32 h-32 overflow-hidden flex items-center justify-center bg-transparent transition-colors duration-200 group-hover:scale-105">
                <div className="absolute inset-0 ring-1 ring-slate-900/10 dark:ring-0" />
                {ok && src ? (
                    <img
                        src={src}
                        alt={`${label} avatar`}
                        className="w-full h-full object-cover"
                        onError={() => setOk(false)}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center rounded-full text-2xl font-semibold text-slate-700 dark:text-white bg-purple-100 dark:bg-purple-800 transition-colors duration-200 group-hover:bg-purple-600 group-hover:text-white">
                        {label.charAt(0)}
                    </div>
                )}
            </div>
        );
    }

    const characters = [
        { slug: "flowdy", label: "Flowdy", image: HS00_001_01?.src },
        { slug: "marvin", label: "Marvin", image: HS00_001_02?.src },
        { slug: "herman", label: "Herman", image: HS00_001_03?.src },
    ];

    // consider any path under /ref/{slug} as active (covers /sfw, /nsfw, etc.)
    const isActive = (slug: string) =>
        Boolean(pathname && pathname.startsWith(`/ref/${slug}`));

    // card styling now mirrors the SocialCard hover/interactive behavior
    const cardClass = (slug: string) => {
        const base =
            "group flex flex-col items-center gap-3 p-6 rounded-[20px] ring-1 ring-slate-900/10 bg-white/0 dark:bg-transparent transition-transform duration-200 ease-out transform hover:scale-[1.02] hover:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 text-center";
        const active = "bg-purple-400 dark:bg-fuchsia-900 text-white shadow-md ring-0";
        const inactive =
            "text-gray-700 dark:text-gray-300";
        return `${base} ${isActive(slug) ? active : inactive}`;
    };

    return (
        <main className="relative bg-white dark:bg-gray-900 min-h-screen flex flex-col">
            <Nav />
            <section className="bg-header-ref bg-cover bg-center" id="title">
                <div className="px-8 md:px-20 lg:px-60 backdrop-blur-sm">
                    <div className="flex pt-32 pb-6 mx-auto max-w-screen-xl gap-4 flex-col">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white font-ibm">Character Information</h2>
                        <p className="mb-8 sm:text-lg text-gray-700 font-ibm">Reference Sheets and Basic Character Information</p>
                    </div>
                </div>
            </section>

            <div className="py-6 px-8 md:px-20 lg:px-60 flex-1">
                <nav className="mx-auto max-w-screen-xl">
                    <p className="mb-4 text-md text-gray-600 dark:text-gray-300 font-ibm">Choose a character to view their reference pages and details.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {characters.map((c) => (
                            <Link key={c.slug} href={`/ref/${c.slug}/sfw`} className={cardClass(c.slug)}>
                                <Avatar src={c.image} label={c.label} />

                                <span className="mt-2 font-ibm text-lg font-medium transition-colors duration-200 group-hover:text-purple-600 dark:group-hover:text-purple-300">
                                    {c.label}
                                </span>
                            </Link>
                        ))}
                    </div>
                </nav>

                <main className="mt-6">{children}</main>
            </div>

            <section className="padding-x py-2 bg-gray-900 dark:bg-gray-950">
                <Footer />
            </section>
        </main>
    );
}