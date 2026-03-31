"use client";

export default function TrustedBy() {
    const logos = [
        "OpenAI",
        "AWS",
        "Stripe",
        "Notion",
        "Vercel",
        "Shopify",
    ];

    return (
        <section className="py-20 overflow-hidden">
            {/* Label */}
            <p className="text-center text-xs tracking-[0.25em] text-gray-400 mb-10">
                TRUSTED BY INNOVATIVE TEAMS
            </p>

            {/* Scrolling container */}
            <div className="relative w-full overflow-hidden">
                <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#FFFAF0] to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#FFFAF0] to-transparent z-10" />

                <div className="flex gap-16 animate-scroll whitespace-nowrap">
                    {[...logos, ...logos].map((logo, i) => (
                        <span
                            key={i}
                            className="text-gray-500 text-sm md:text-base font-medium tracking-wide opacity-50 hover:opacity-100 transition duration-300"
                        >
                            {logo}
                        </span>
                    ))}
                </div>
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-10">
                Supporting teams from early-stage startups to enterprise platforms
            </p>
        </section>
    );
}