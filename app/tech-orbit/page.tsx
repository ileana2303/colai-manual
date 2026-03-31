"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

const tech = [
    "SoftOne",
    "Power BI",
    "AWS",
    "Azure",
    "OpenAI",
    "React",
    "Next.js",
    "Stripe",
];

const accentLabelClasses = [
    "border-blue-200/80 bg-blue-500/12 text-blue-900 shadow-[0_12px_32px_rgba(59,130,246,0.16)]",
    "",
    "border-violet-200/80 bg-violet-500/12 text-violet-900 shadow-[0_12px_32px_rgba(168,85,247,0.16)]",
    "",
    "border-sky-200/80 bg-sky-500/12 text-sky-900 shadow-[0_12px_32px_rgba(14,165,233,0.16)]",
    "",
    "border-fuchsia-200/80 bg-fuchsia-500/12 text-fuchsia-900 shadow-[0_12px_32px_rgba(217,70,239,0.16)]",
    "",
];

export default function TechOrbit() {
    return (
        <section
            id="techorbit"
            className="flex flex-col items-center px-6 py-24 sm:py-28"
        >

            <h2 className="mb-6 flex items-center justify-center gap-3 text-center text-sm font-bold tracking-wide text-black">
                <span className="w-2 h-2 bg-black rounded-full" />
                TECHNOLOGY ECOSYSTEM
                <span className="w-2 h-2 bg-black rounded-full" />
            </h2>

            {/* Orbit container */}
            <div className="relative flex h-[min(92vw,40rem)] w-[min(92vw,40rem)] max-h-[40rem] max-w-[40rem] items-center justify-center">
                <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.96)_0%,rgba(255,250,240,0.82)_42%,rgba(255,250,240,0)_72%)]" />
                <div className="tech-orbit-pulse absolute h-[36%] w-[36%] rounded-full border border-black/5" />
                <div className="absolute h-[64%] w-[64%] rounded-full border border-black/10" />
                <div className="tech-orbit-pulse absolute h-[90%] w-[90%] rounded-full border border-dashed border-black/10 [animation-delay:1.2s]" />

                {/* Center core */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="tech-orbit-core flex h-20 w-20 items-center justify-center rounded-full border border-black/10 sm:h-24 sm:w-24">
                        <Image
                            src="/logo.png"
                            alt="BIAIS Logo"
                            width={48}
                            height={48}
                            className="h-9 w-9 sm:h-11 sm:w-11"
                        />
                    </div>
                </div>

                {/* Nodes */}
                {tech.map((label, i) => {
                    const angle = (360 / tech.length) * i;
                    const isOuterRing = i % 2 === 0;
                    const radius = isOuterRing
                        ? "clamp(9rem, 17vw, 13.5rem)"
                        : "clamp(6.5rem, 12vw, 9.75rem)";
                    const duration = isOuterRing ? "28s" : "36s";
                    const direction = isOuterRing ? "normal" : "reverse";
                    const delay = `${i * -1.4}s`;
                    const orbitStyle = {
                        "--orbit-angle": `${angle}deg`,
                        "--orbit-radius": radius,
                        "--orbit-duration": duration,
                        "--orbit-direction": direction,
                        "--orbit-delay": delay,
                        "--orbit-counter-angle": `${-angle}deg`,
                    } as CSSProperties;

                    return (
                        <div
                            key={label}
                            className="tech-orbit-node absolute left-1/2 top-1/2"
                            style={orbitStyle}
                        >
                            <div className={`tech-orbit-node-label rounded-full border border-black/10 bg-white/78 px-4 py-2 text-sm font-medium text-gray-700 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(0,0,0,0.12)] ${accentLabelClasses[i]}`}>
                                {label}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Subtext */}
            <p className="mt-12 max-w-md text-center text-sm text-gray-500 sm:mt-16">
                Integrating enterprise platforms, cloud infrastructure and AI systems into one cohesive product
            </p>
        </section>
    );
}
