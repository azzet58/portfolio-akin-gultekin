import Link from "next/link";
import { projects } from "@/data/projects";
import Button from "../ui/Button";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section className="bg-neutral-100">
      <div className="mx-auto flex flex-col px-4 py-12">
        <div className="flex flex-col">
          {projects.map((project) => (
            <article
              key={project.live}
              className="mx-auto flex w-full max-w-7xl flex-col gap-12"
            >
              <div className="bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="aspect-[16/9] w-full"
                >
                  <source
                    src="/videos/ozad-elektrotechniek.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="flex flex-col items-center gap-6">
                <div className="mx-auto flex w-full max-w-5xl items-start justify-center gap-2">
                  <h2 className="font-heading text-5xl font-bold">
                    {project.name}
                  </h2>
                </div>
                <p className="font-heading max-w-3xl text-center text-lg font-semibold text-zinc-400">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  <Link
                    href={project.live}
                    className="font-heading flex items-center gap-1 rounded-full bg-gradient-to-tl from-gray-700 via-gray-500 to-gray-500 px-2 py-2 text-xs font-medium text-white transition-colors duration-400 hover:from-gray-500 hover:via-gray-700 hover:to-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site
                    <FiExternalLink />
                  </Link>
                  <Link
                    href={project.github}
                    className="font-heading flex items-center gap-1 rounded-full bg-gradient-to-tl from-gray-700 via-gray-500 to-gray-500 px-2 py-1 text-xs font-medium text-white transition-colors duration-400 hover:from-gray-500 hover:via-gray-700 hover:to-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                    <FiExternalLink />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
