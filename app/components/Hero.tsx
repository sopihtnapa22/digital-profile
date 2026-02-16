export default function Hero() {
    return (
        <section className="relative max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-16 items-center">


            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />
            <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full" />

            {/* Left */}
            <div className="space-y-8 relative z-10">
                <h1 className="text-6xl lg:text-5xl font-extrabold leading-tight">
                    เว็บไซต์แสดงผลงาน <br />
                    <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                        และทักษะด้านเทคโนโลยี
                    </span>
                </h1>

                <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
                    <span className="font-semibold text-white">
                        นางสาวโศภิตนภา งามวณิชวงศ์ 66162110402-8
                    </span>
                    <br />
                    นักศึกษาสาขาวิทยาการคอมพิวเตอร์
                    <br />
                    มหาวิทยาลัยเทคโนโลยีราชมงคลอิสาน
                    < br />
                    < br />
                    เว็บไซต์นี้จัดทำขึ้นเพื่อรวบรวมผลงานและแสดงศักยภาพด้านการพัฒนาเทคโนโลยีดิจิทัล
                    ทั้งการออกแบบ พัฒนา และทดสอบระบบงานต่าง ๆ
                    เป็นส่วนหนึ่งของรายวิชา Digital ภาคเรียนที่ 2 ปีการศึกษา 2569
                </p>



            </div>


            <div className="relative group">
                <div className="absolute -inset-4 bg-blue-600/30 blur-2xl rounded-2xl opacity-40 group-hover:opacity-60 transition" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <pre className="text-sm text-zinc-300 font-mono leading-relaxed">
                        {`const Developer = () => {
  const stack = ["Next.js", "TypeScript", "Cloud"];

  return (
    <Engineer
      mindset="Scalable"
      status="Available"
    />
  );
};`}
                    </pre>
                </div>
            </div>
        </section>
    );
}
