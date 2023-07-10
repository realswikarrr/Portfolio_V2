export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const allworks: Project[] = [
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
  {
    title: "Twitter Clone With Emoji",
    techs: ["ReactJS (NextJS)", "tRPC", "TypeScript", "Tailwind"],
    link: "https://chrimp.vercel.app/",
    // isComingSoon: true,
  },
  {
    title: "NPM All",
    techs: ["ReactJS (NextJS)", "tRPC", "TypeScript", "Tailwind"],
    link: "https://npmall.vercel.app/",
    // isComingSoon: true,
  },
  {
    title: "Insta Link",
    techs: ["ReactJS (NextJS)", "tRPC", "TypeScript", "Tailwind"],
    link: "https://instalink.vercel.app/",
    // isComingSoon: true,
  },
  {
    title: "Full Stack E-Commerce Application",
    techs: ["ReactJS (NextJS)", "TypeScript", "Tailwind", "Sanity"],
    link: "https://dfitness.vercel.app/",
    // isComingSoon: true,
  },
];

export default allworks;
