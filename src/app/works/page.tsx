import { FC } from "react";

import ProjectCard from "@/components/ProjectCard";
import allworks from "@/data/allworks";
import { Metadata } from "next";

interface pageProps {}

export const metadata: Metadata = {
  title: "Works",
  description: "Collection of projects made by Swikar Adhikari.",
};

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <main className="flex flex-col gap-20">
        <h1 className="text-2xl text-neutral-100">Works</h1>

        <article className="flex flex-col gap-4">
          {allworks.length === 0 && <p>Oops, I must work^^^^^</p>}

          <section className="flex flex-col gap-4">
            {allworks.length !== 0 &&
              allworks.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
          </section>
        </article>
      </main>
    </>
  );
};

export default page;
