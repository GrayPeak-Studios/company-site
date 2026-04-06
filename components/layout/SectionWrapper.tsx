import type { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
  as?: ElementType;
  className?: string;
  innerClassName?: string;
  /** Override vertical padding. Defaults to `py-16 sm:py-20 lg:py-24`. */
  py?: string;
  "aria-labelledby"?: string;
};

export function SectionWrapper({
  children,
  id,
  as: Tag = "section",
  className = "",
  innerClassName = "",
  py = "py-16 sm:py-20 lg:py-24",
  "aria-labelledby": ariaLabelledBy,
}: Props) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`${py} ${className}`}
    >
      <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${innerClassName}`}>
        {children}
      </div>
    </Tag>
  );
}
