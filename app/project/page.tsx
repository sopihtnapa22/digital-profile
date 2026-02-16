"use client";

import Navbar from "../components/Navbar";
import Link from "next/link";

export default function ProjectPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0c] text-[#f6f6f8] overflow-hidden">
            <Navbar />

            <section className="px-6 lg:px-20 py-20 space-y-24">


                <div>
                    <div className="text-center mb-14">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
                            My{" "}
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h2>
                        <p className="text-zinc-400 mt-3">
                            ผลงานที่ได้พัฒนาและลงมือทำจริง
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <Link href="/project/ecommerce">
                            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-xl cursor-pointer">
                                <img
                                    src="/images/web.png"
                                    alt="E-commerce"
                                    className="rounded-xl mb-4"
                                />
                                <h3 className="text-xl font-bold">
                                    E-commerce Website
                                </h3>
                            </div>
                        </Link>

                        <Link href="/project/portfolio">
                            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-xl cursor-pointer">
                                <img
                                    src="/images/DoseNote.png"
                                    alt="Dosenote"
                                    className="rounded-xl mb-4"
                                />
                                <h3 className="text-xl font-bold">
                                    Dosenote
                                </h3>
                            </div>
                        </Link>

                    </div>
                </div>


                <div>
                    <div className="text-center mb-14">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
                            My{" "}
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Activities
                            </span>
                        </h2>
                        <p className="text-zinc-400 mt-3">
                            กิจกรรมและประสบการณ์ที่เคยเข้าร่วม
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <Link href="/activities/openhouse">
                            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-xl cursor-pointer">
                                <img
                                    src="/images/pigt2.jpg"
                                    alt="กิจกรรมopen house"
                                    className="rounded-xl mb-4"
                                />
                                <h3 className="text-xl font-bold">
                                    กิจกรรมopen house
                                </h3>
                            </div>
                        </Link>

                        <Link href="/activities/seminar">
                            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-xl cursor-pointer">
                                <img
                                    src="/images/pigt4.jpg"
                                    alt="Seminar"
                                    className="rounded-xl mb-4"
                                />
                                <h3 className="text-xl font-bold">
                                    Coding Care
                                </h3>
                            </div>
                        </Link>

                    </div>
                </div>

            </section>
        </main>
    );
}
