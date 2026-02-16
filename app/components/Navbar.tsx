export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold">D</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight">
                        DIGITAL-PORTFOLIO
                    </span>
                </div>

                <div className="hidden md:flex gap-8 text-sm text-zinc-400">
                    <a className="hover:text-white transition" href="/">Home</a>
                    <a className="hover:text-white transition" href="/project">Projects</a>
                    <a className="hover:text-white transition" href="/about">About</a>

                </div>


            </div>
        </nav>
    );
}
