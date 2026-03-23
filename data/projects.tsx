type Project = {
  name: string;
  description: string;
  visual: string;
  live: string;
  github: string;
};

export const projects: Project[] = [
  {
    name: "Özad Elektrotechniek",
    description:
      "Modern website redesign for Özad Elektrotechniek - an electrician company. Built with Next.js, Tailwind CSS, shadcn/ui, Framer Motion, Resend and Lucide Icons.",
    visual: "/videos/ozad-elektrotechniek.mp4",
    live: "https://ozadelektrotechniek.nl",
    github: "https://github.com/azzet58/ozad-elektrotechniek",
  },
];
