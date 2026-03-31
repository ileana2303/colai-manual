"use client";

import { useState, useRef } from "react";
import Container from "./layout/container";

const projects = [
  {
    title: "AI Document Intelligence",
    description:
      "Automated document processing platform using machine learning pipelines.",
    tech: ["React", "Python", "AWS", "OpenAI"],
    image: "/projects/colai.jpg",
    video: "/projects/colai-preview.mp4",
  },
  {
    title: "Mobile SaaS",
    description:
      "Real-time analytics dashboard powering cross-platform mobile applications.",
    tech: ["React Native", "GraphQL", "AWS"],
    image: "/projects/e-order-demo.jpg",
    video: "/projects/e-order-demo.mp4",
  },
  {
    title: "Marketplace Platform",
    description:
      "Scalable B2B marketplace with advanced search, payments and analytics.",
    tech: ["Next.js", "Node", "PostgreSQL"],
    image: "/projects/eorder.jpg",
    video: "/projects/eorder-preview.mp4",
  },
  {
    title: "Mobile SaaS Dashboard",
    description:
      "Real-time analytics dashboard powering cross-platform mobile applications.",
    tech: ["React Native", "GraphQL", "AWS"],
    image: "/projects/test.jpg",
    video: "/projects/test2.mp4",
  },

];

const featuredProjects = [
  {
    title: "Enterprise Transformation Program",
    description:
      "A flagship delivery unifying product, automation and AI systems into one scalable platform.",
    tech: ["Next.js", "OpenAI", "Automation", "Cloud"],
    image: "/projects/featured.jpg",
  },
  {
    title: "Architectural Studio Website",
    description:
      "A major multi-surface platform aligning customer journeys, operational data and AI-assisted workflows across the business.",
    tech: ["React", "Node", "Cloud"],
    image: "/projects/ilarq.jpg",
    href: "https://ilarq.vercel.app/",
  },
];

function ProjectCard({ project, onOpen, featured = false }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  const handleEnter = () => {
    setHovered(true);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
    }
  };

  const handleLeave = () => {
    setHovered(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    if (project.href) {
      window.location.assign(project.href);
      return;
    }

    onOpen({ ...project, featured });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      className={`group relative cursor-pointer overflow-hidden rounded-[28px] border-[1.5px] border-white/10 bg-neutral-950 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-all duration-500 ease-out transform-gpu will-change-transform hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.28)] ${featured ? "md:col-span-2 xl:col-span-4" : ""
        }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_28%,transparent_72%,rgba(255,255,255,0.04))] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

      <div
        className={`relative w-full ${featured ? "aspect-[4/5] md:aspect-[16/7]" : "aspect-[9/18]"
          }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:saturate-[1.08] ${featured
            ? "object-top group-hover:scale-[1.02]"
            : "object-top group-hover:scale-[1.015]"
            }`}
        />

        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.image}
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out ${featured ? "group-hover:scale-[1.03]" : "object-top group-hover:scale-[1.015]"} ${hovered ? "scale-100 opacity-100" : "scale-[1.005] opacity-0"
              }`}
          />
        ) : null}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_24%)] opacity-35 transition-opacity duration-200 group-hover:opacity-55" />

        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${featured
            ? "bg-gradient-to-t from-black/28 via-black/10 to-transparent"
            : "bg-gradient-to-t from-black/22 via-black/8 to-transparent"
            }`}
        />

        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100 bg-[radial-gradient(220px_220px_at_var(--x)_var(--y),rgba(255,255,255,0.16),transparent_60%)]" />
      </div>

      <div
        className={`absolute bottom-0 w-full text-white transition-transform duration-500 ease-out group-hover:-translate-y-1 ${featured ? "p-6 md:p-10" : "p-6"
          }`}
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/55">
            Case Study
          </span>
          <span className="text-xs text-white/45 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white/80">
            View Project
          </span>
        </div>

        <h3 className={`mb-2 font-semibold ${featured ? "text-3xl" : "text-xl"}`}>
          {project.title}
        </h3>

        <p
          className={`mb-4 leading-relaxed opacity-80 ${featured ? "max-w-3xl text-base" : "text-sm"
            }`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs backdrop-blur-md transition-colors duration-500 group-hover:border-white/20 group-hover:bg-white/12"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const isFeatured = Boolean(project.featured);

  return (

    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-6"
      onClick={onClose}
    >
      <div
        className={`relative w-full overflow-hidden border border-white/10 bg-black shadow-2xl ${isFeatured
          ? "max-w-[96rem] rounded-[32px]"
          : "max-w-sm rounded-[36px] sm:max-w-md"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 text-white/70 hover:text-white sm:right-5 sm:top-5"
        >
          Close
        </button>

        {isFeatured ? (
          <div className="p-4 pt-14 sm:p-5 sm:pt-16">
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-neutral-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <div className="ml-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Web Preview
                </div>
              </div>

              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[16/7] object-cover object-top"
              />
            </div>
          </div>
        ) : (
          <div className="px-3 pb-3 pt-12 sm:px-4 sm:pb-4 sm:pt-14">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-neutral-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-[9/19.5] object-cover object-top"
              />
            </div>
          </div>
        )}

        <div className={`text-white ${isFeatured ? "p-6 pt-2 sm:p-8 sm:pt-3" : "p-6 pt-4 sm:p-8 sm:pt-5"
          }`}>
          <h3 className="mb-4 text-2xl font-semibold sm:text-3xl">{project.title}</h3>

          <p className="mb-6 leading-relaxed text-white/70">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-sm px-4 py-1 rounded-full bg-white/10 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (

    <section id="projects" className="py-32">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-6 flex items-center justify-center gap-3 text-center text-sm font-bold tracking-wide text-black">
            <span className="w-2 h-2 bg-black rounded-full" />
            SELECTED WORKS
            <span className="w-2 h-2 bg-black rounded-full" />
          </h2>

          <p className="text-lg text-gray-500 mx-auto leading-relaxed">
            Platforms, AI systems and applications engineered for scalability,
            performance and real-world impact.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpen={setActiveProject}
            />
          ))}

          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpen={setActiveProject}
              featured={true}
            />
          ))}
        </div>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </Container>
    </section>
  );
}
