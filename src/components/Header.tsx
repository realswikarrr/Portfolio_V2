"use client";

import presentation from "@/data/presentation";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="z-40 flex w-full flex-col gap-2 md:flex-row md:justify-between">
      <a
        href={`mailto:${presentation.mail}`}
        className="hover:text-neutral-100"
      >
        {presentation.mail}
      </a>

      <nav role="navigation">
        <ul role="list" className="flex flex-row gap-2">
          <li>
            <Link
              href="/"
              className={clsx(
                pathName === "/" && "text-neutral-100",
                "hover:text-neutral-100"
              )}
            >
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/posts"
              className={clsx(
                pathName === "/posts" && "text-neutral-100",
                "hover:text-neutral-100"
              )}
            >
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
