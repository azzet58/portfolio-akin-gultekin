type Project = {
  type: string;
  name: string;
  description: string;
  visual: string;
  live: string;
  github: string;
};

export const projects: Project[] = [
  {
    type: "CLIENT PROJECT",
    name: "Özad Elektrotechniek",
    description:
      "Designed and developed a custom website for an electrician company using Next.js and Tailwind. Focused on responsive design, performance, and modern UI.",
    visual: "/videos/ozad-elektrotechniek.mp4",
    live: "https://ozadelektrotechniek.nl",
    github: "https://github.com/azzet58/ozad-elektrotechniek",
  },
];
