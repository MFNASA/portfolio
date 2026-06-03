const certificateGroups = [
{
title: "Oracle Academy",
icon: "💻",
total: "5 Sertifikat",
link: "/certificates/ai.png",
},

{
title: "Invofest",
icon: "🏆",
total: "2 Sertifikat",
link: "/certificates/peserta invofest.jpg",
},

{
title: "Organization",
icon: "📜",
total: "1 Sertifikat",
link: "/certificates/sertif psc 1.png",
},

{
title: "Networking",
icon: "🌐",
total: "2 Sertifikat",
link: "/certificates/jarkom2.png",
},
];

export default function Certificates() {
return (
<section
    id="certificates"
    className="max-w-6xl mx-auto py-16 px-6"
>

    {/* HEADER */}
    <div className="text-center mb-10">

    <p className="text-blue-500 mb-2">
        Certificates
    </p>

    <h2 className="
        text-3xl
        md:text-4xl
        font-bold
    ">
        Sertifikat Saya
    </h2>
    </div>

    {/* GRID */}
    <div className="
    grid
    grid-cols-1
    sm:grid-cols-2
    gap-5
    ">

    {certificateGroups.map((cert, index) => (

        <div
        key={index}
        className="
            bg-zinc-900/70
            border
            border-zinc-800
            rounded-2xl
            p-5
            hover:border-blue-500
            transition
        "
        >

        {/* TOP */}
        <div className="
            flex
            items-center
            gap-4
            mb-4
        ">

            <div className="text-4xl">
            {cert.icon}
            </div>

            <div>
            <h3 className="
                text-xl
                font-semibold
            ">
                {cert.title}
            </h3>

            <p className="
                text-sm
                text-zinc-400
            ">
                {cert.total}
            </p>
            </div>
        </div>

        {/* BUTTON */}
        <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-block
            bg-blue-600
            hover:bg-blue-500
            px-4
            py-2
            rounded-xl
            text-sm
            text-white
            transition
            "
        >
            View →
        </a>
        </div>
    ))}
    </div>
</section>
);
}