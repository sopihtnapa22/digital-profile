import Navbar from "../../components/Navbar";
import Image from "next/image";



const activityData = {
    seminar: {
        title: "Coding Care ใส่ใจน้องด้วยเทคโนโลยี",
        description: "อีกหนึ่งประสบการณ์ดีๆ ที่นักศึกษาชั้นปี 3 สาขาวิชาวิทยาการคอมพิวเตอร์ ได้มอบความรู้และรอยยิ้มให้น้องๆ ชั้นมัธยมศึกษา ปีที่ 1-3 ณ โรงเรียนบ้านกระเบื้องใหญ่ อ.พิมาย จ.นครราชสีมา",
        image: "/images/pigt3.jpg",
        image2: "/images/pigt6.jpg",
    },
    openhouse: {
        title: "กิจกรรมopen house",
        description: "เข้าร่วมกิจกรรม Open House เพื่อแนะนำหลักสูตรสาขาวิชาวิทยาการคอมพิวเตอร์ให้กับนักเรียนระดับมัธยมศึกษา โดยมีบทบาทในการให้ข้อมูลเกี่ยวกับการเรียนการสอน แนะนำผลงานของนักศึกษา และสาธิตโปรเจกต์ต่าง ๆ เพื่อสร้างความเข้าใจและแรงบันดาลใจในการศึกษาต่อด้านเทคโนโลยี",
        image: "/images/pigt5.jpg",
        image2: "/images/pigt1.jpg",
    },
};

export default function ActivityDetailPage(
    { params }: { params: { slug: string } }
) {
    const activity = activityData[params.slug as keyof typeof activityData];

    if (!activity) {
        return <div className="text-white">Activity not found</div>;
    }

    return (
        <main className="min-h-screen bg-[#0a0a0c] text-white">
            <Navbar />

            <section className="px-6 lg:px-20 py-20">


                <h1 className="text-4xl font-bold mb-6">
                    {activity.title}
                </h1>

                {/* รูปแรก */}
                {activity.image && (
                    <Image
                        src={activity.image}
                        alt={activity.title}
                        width={800}
                        height={500}
                        className="rounded-xl mb-8 w-full max-w-md mx-auto"
                    />
                )}

                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    {activity.description}
                </p>

                {/* รูปที่สอง */}
                {activity.image2 && (
                    <Image
                        src={activity.image2}
                        alt="Activity image 2"
                        width={800}
                        height={500}
                        className="rounded-xl w-full max-w-md mx-auto"
                    />
                )}
            </section>

        </main>
    );

}
