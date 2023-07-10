type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "swikara082@gmail.com",
  title: "Hi, I’m Swikar 👋",
  description:
    "Hello, i'm a *Australian Frontend Developer* with over *1.5 years* of web experience. I am currently working with *NextJS and Typescript*. Outside of work I like listening to podcast and learning TypeScript.",
  socials: [
    {
      label: "Twiiter",
      link: "https://twitter.com/swikarr_",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/swikaradhikari/",
    },
    {
      label: "Github",
      link: "https://github.com/realswikarrr",
    },
    {
      label: "Threads",
      link: "https://www.threads.net/@swikarrr",
    },
  ],
};

export default presentation;
