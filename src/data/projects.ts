export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Breadit Full Stack Application",
    techs: ["ReactJS (NextJS)", "react-query", "zod", "prisma", "planetscale"],
    link: "https://breadit-swikar.vercel.app/",
  },
  {
    title: "Music Player",
    techs: ["ReactJS (NextJS)", "TypeScript"],
    link: "https://neplofi.vercel.app/",
  },
  {
    title: "ShareU Full Stack Document Sharing App",
    techs: ["ReactJS (NextJS)", "tRPC", "TypeScript", "Tailwind"],
    link: "https://shareu.vercel.app/",
    // isComingSoon: true,
  },
];

export default projects;
