import Image from "next/image";
import Navbar from "@/app/components/Navbar";

type Activity = {
    title: string;
    description: string;
    image?: string;
    image2?: string;
};

const activities: Record<string, Activity> = {
    seminar: {
        title: "Coding Care ใส่ใจน้องด้วยเทคโนโลยี",
        description:
            "อีกหนึ่งประสบการณ์ดีๆ ที่นักศึกษาชั้นปี 3 สาขาวิชาวิทยาการคอมพิวเตอร์ ได้มอบความรู้และรอยยิ้มให้น้องๆ ชั้นมัธยมศึกษา ปีที่ 1-3 ณ โรงเรียนบ้านกระเบื้องใหญ่ อ.พิมาย จ.นครราชสีมา",
        image: "/images/pigt1.jpg",
        image2: "/images/pigt2.jpg",
    },
};

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const project = projectData[slug];

    if (!project) {
        return <div className="p-10 text-white">Project not found</div>;
    }

    return (
        <main className="min-h-screen bg-[#0a0a0c] text-white">
            <Navbar />

            <section className="px-6 lg:px-20 py-20">
                <h1 className="text-4xl font-bold mb-6">
                    {activity.title}
                </h1>

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
