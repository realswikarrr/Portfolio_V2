import clsx from "clsx";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";

type CustomLinkProps = HTMLAttributes<"a"> & {
  label: string;
  isUnderline?: boolean;
};

const CustomLink: FC<CustomLinkProps> = ({ label, isUnderline, ...props }) => {
  return (
    // @ts-ignore
    <a
      // @ts-ignore
      href={props.href}
      className={clsx(
        "hover:text-neutral-100 cursor-pointer",
        isUnderline && "underline decoration-dashed underline-offset-8"
      )}
      {...props}
      rel="noreferrer"
      target="_blank"
    >
      {label}
      <span className="sr-only">{label} link</span>
    </a>
  );
};

export default CustomLink;
