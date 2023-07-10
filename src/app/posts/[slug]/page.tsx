import formatDate from "@/utils/formatDate";
import { FC } from "react";
import matter from "gray-matter";
import fs from "fs";
import * as path from "path";

import Markdown from "markdown-to-jsx";

interface pageProps {
  params: any;
}

const getPostMetadata = (slug: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("src", "content", slug + ".md")
  );

  const { data, content } = matter(markdownWithMeta);

  return {
    data,
    content,
  };
};

const page: FC<pageProps> = ({ params }) => {
  const post = getPostMetadata(params.slug);

  return (
    <main className="post mx-auto flex w-full max-w-prose flex-col gap-4">
      <header role="presentation">
        <h1 className="text-md">
          {post.data.title} - {formatDate(post.data.publishedAt)}
        </h1>
        <p className="italic">{post.data.description}</p>
      </header>

      <Markdown>{post.content}</Markdown>
    </main>
  );
};

export default page;
