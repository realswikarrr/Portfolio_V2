import { FC } from "react";
import matter from "gray-matter";
import fs from "fs";
import * as path from "path";
import formatDate from "@/utils/formatDate";
import Link from "next/link";
import { Metadata } from "next";

interface pageProps {}

export const metadata: Metadata = {
  title: "Posts",
  description: "Blog Post From Swikar Adhikari",
};

const getPostMetadata = () => {
  const files = fs.readdirSync(path.join("src", "content"));

  const posts = files.map((filename) => {
    const mardownWithMeta = fs.readFileSync(
      path.join("src", "content", filename)
    );
    const { data } = matter(mardownWithMeta);

    return {
      data,
    };
  });

  return posts;
};

const page: FC<pageProps> = ({}) => {
  const posts = getPostMetadata();

  return (
    <>
      <main className="flex flex-col gap-20">
        <h1 className="text-2xl text-neutral-100">Posts</h1>

        <article className="flex flex-col gap-4">
          {posts.map((post, index) => (
            <Link
              key={index}
              className="group flex flex-col gap-2 border-t border-neutral-700 py-4 transition-all hover:text-neutral-100"
              href={`/posts/${post.data.slug}`}
            >
              <div className="flex w-full items-center justify-between">
                <h2 className="text-lg">{post.data.title}</h2>

                <div className="flex flex-row items-center gap-4">
                  <p>{formatDate(post.data.publishedAt)}</p>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="transition-all duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M5.25 12.75L12.75 5.25"
                      stroke="#999999"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.25 5.25H12.75V12.75"
                      stroke="#999999"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p>{post.data.description}</p>
            </Link>
          ))}
        </article>
      </main>
    </>
  );
};

export default page;
