import presentation from "@/data/presentation";
import { FC } from "react";
import CustomLink from "./CustomLink";

interface SocialLinksProps {}

const SocialLinks: FC<SocialLinksProps> = ({}) => {
  return (
    <ul role="list" className="flex flex-row gap-2">
      {presentation.socials.map((social, index) => (
        <>
          <li>
            {/* @ts-ignore */}
            <CustomLink label={social.label} href={social.link} />
          </li>

          {presentation.socials.length - 1 !== index && <li>/</li>}
        </>
      ))}
    </ul>
  );
};

export default SocialLinks;
