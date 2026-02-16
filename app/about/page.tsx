"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import { User, GraduationCap, Code2, Database, BrainCircuit } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0c] text-[#f6f6f8] overflow-hidden">
            <Navbar />

            <section className="relative max-w-7xl mx-auto px-6 py-10">

                <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 -left-24 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full" />

                <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
                    {/* LEFT SIDE */}
                    <div className="space-y-8">
                        <h1 className="text-5xl lg:text-4xl font-extrabold leading-tight">
                            About Me <br />
                            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                                Sophitnapha Ngamwanichwong
                            </span> <br />
                            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                                66162110402-8
                            </span>
                        </h1>
                        <div className="relative w-60 h-60 rounded-3xl overflow-hidden border border-white/10 shadow-2xl ml-26">
                            <Image
                                src="/images/port.jpg"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-zinc-400 text-lg leading-relaxed">
                            นักศึกษาสาขาวิทยาการคอมพิวเตอร์
                            มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน
                        </p>
                        <div className="space-y-6">

                            <div>
                                <p className="text-lg font-extrabold leading-tight">
                                    ความสนใจ
                                </p>
                                <p className="text-zinc-400 text-lg leading-relaxed mt-2">
                                    สนใจพัฒนาทักษะด้าน Frontend และการออกแบบเว็บไซต์ให้ใช้งานง่าย
                                    และตอบสนองต่อผู้ใช้ได้ดี
                                </p>
                            </div>

                            <div>
                                <p className="text-lg font-extrabold leading-tight">
                                    เป้าหมาย
                                </p>
                                <p className="text-zinc-400 text-lg leading-relaxed mt-2">
                                    มีเป้าหมายที่จะเติบโตเป็นนักพัฒนาซอฟต์แวร์ที่มีความสามารถ
                                    และได้ทำงานในโปรเจกต์จริง
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* RIGHT SIDE */}
                    <div className="relative bg-[#0d0d0f] border border-white/10 rounded-3xl p-8 shadow-2xl space-y-6">
                        <h3 className="text-xl font-bold text-white">
                            Skills
                        </h3>

                        <div className="space-y-4 text-sm font-mono text-zinc-300">
                            <div className="flex items-center gap-3">
                                <Code2 className="text-blue-500" />
                                <span>Frontend: HTML, CSS,TypeScript, Next.js</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Code2 className="text-cyan-500" />
                                <span>Backend: Node.js</span>
                            </div>


                            <div className="flex items-center gap-3">
                                <Database className="text-violet-500" />
                                <span>Database: MySQL,MongoDB, Supabase</span>
                            </div>

                        </div>


                    </div>
                </div>
            </section>
        </main>
    );
}
