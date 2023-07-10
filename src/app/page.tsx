import SocialLinks from "@/components/SocialLinks";
import presentation from "@/data/presentation";
import convertAsteriskToStrongTag from "@/utils/convertAsteriskToStrongTag";

export default function Home() {
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
    </main>
  );
}
