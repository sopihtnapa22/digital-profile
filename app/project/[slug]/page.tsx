import Navbar from "../../components/Navbar";
import Image from "next/image";

// แก้จุดนี้: เพิ่ม Type เพื่อให้ TypeScript ยอมรับการดึงข้อมูลด้วย slug (string)
const projectData: Record<string, { title: string; description: string; images: string[] }> = {
    ecommerce: {
        title: "E-commerce Website",
        description: "เว็บไซต์นี้เป็นระบบร้านค้าออนไลน์สำหรับจำหน่ายสบู่แฮนด์เมด โดยพัฒนาด้วย Next.js และเชื่อมต่อฐานข้อมูลผ่าน Supabase เพื่อรองรับการจัดการข้อมูลผู้ใช้และคำสั่งซื้ออย่างมีประสิทธิภาพระบบประกอบด้วยหน้าหลักสำหรับแสดงข้อมูลแบรนด์และสินค้า หน้ารวมสินค้าและรายละเอียดสินค้า ระบบตะกร้าสินค้า ระบบสมัครสมาชิกและเข้าสู่ระบบ รวมถึงระบบบันทึกและแสดงประวัติการสั่งซื้อของผู้ใช้งาน้ใช้สามารถสมัครสมาชิก เข้าสู่ระบบ เลือกสินค้า เพิ่มลงตะกร้า และทำรายการสั่งซื้อได้อย่างสะดวก ขณะที่ระบบฐานข้อมูลจะจัดเก็บข้อมูลผู้ใช้ สินค้า และคำสั่งซื้ออย่างเป็นระบบ เพื่อให้สามารถตรวจสอบและจัดการข้อมูลได้อย่างถูกต้องเว็บไซต์นี้ถูกออกแบบให้ใช้งานง่าย มีความเรียบง่าย ทันสมัย และเหมาะกับการจำหน่ายสินค้าออนไลน์ในปัจจุบัน",
        images: [
            "/images/web.png"
        ],
    },
    portfolio: {
        title: "Dosenote",
        description: "DoseNote คือแอปพลิเคชันผู้ช่วยส่วนตัวในการบริหารจัดการการทานยาเพื่อแก้ปัญหาหลักของผู้ป่วยหรือผู้ที่ต้องทานยาต่อเนื่อง คือการ ลืมทานยา และ จำไม่ได้ว่าวันนี้ทานไปหรือยัง",
        images: [
            "/images/4.png",
            "/images/5.png",
            "/images/6.png",
            "/images/7.png",
        ],
    },
};

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    // ดึงค่า slug ออกมาด้วย await ตามมาตรฐาน Next.js 15
    const { slug } = await params;

    // ตอนนี้บรรทัดนี้จะไม่ Error แล้วครับ เพราะเราใส่ Record ไว้ข้างบน
    const project = projectData[slug as keyof typeof projectData];

    if (!project) {
        return <div className="p-10 text-white text-center">Project not found</div>;
    }

    return (
        <main className="min-h-screen bg-[#0a0a0c] text-white">
            <Navbar />

            <section className="px-6 lg:px-20 py-20">
                <h1 className="text-4xl font-bold mb-6">
                    {project.title}
                </h1>

                <p className="text-zinc-400">
                    {project.description}
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    {project.images?.map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt={`Project image ${index + 1}`}
                            width={800}
                            height={500}
                            className="rounded-xl w-full"
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}