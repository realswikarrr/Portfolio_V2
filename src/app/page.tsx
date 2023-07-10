import CustomLink from "@/components/CustomLink";
import PostCard from "@/components/PostCard";
import SocialLinks from "@/components/SocialLinks";
import presentation from "@/data/presentation";
import convertAsteriskToStrongTag from "@/utils/convertAsteriskToStrongTag";
import matter from "gray-matter";
import fs from "fs";
import * as path from "path";

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

export default function Home({}) {
  const posts = getPostMetadata();

  return (
    <main className="flex flex-col gap-20">
      <article className="flex flex-col gap-8">
        <h1 className="text-3xl text-neutral-100">{presentation.title}</h1>
        <h2
          className="max-w-[60ch] leading-6"
          dangerouslySetInnerHTML={{
            __html: convertAsteriskToStrongTag(presentation.description),
          }}
        />
        <SocialLinks />
      </article>

      <article className="flex flex-col gap-8">
        <header className="flex w-full flex-row justify-between gap-2">
          <h3 className="text-lg text-neutral-100">Latest posts</h3>

          <CustomLink
            //  @ts-ignore
            href="/posts"
            label="See all posts"
            isUnderline
            target="_self"
          />
        </header>
        {posts.length === 0 && <p>Soon, stay connected 👀...</p>}

        <section className="flex flex-col gap-4 md:flex-row md:flex-wrap">
          {posts.length !== 0 &&
            posts
              .slice(0, 2)
              .map((post: any, index: any) => (
                <PostCard
                  key={index}
                  publishedAt={post.data.publishedAt}
                  title={post.data.title}
                  description={post.data.description}
                  slug={post.slug}
                />
              ))}
        </section>
      </article>
    </main>
  );
}
