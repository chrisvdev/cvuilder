import type { ComponentProps } from "react";

type SectionProps = ComponentProps<"section">;

export default function Section({ className, children }: SectionProps) {
  return (
    <section
      className={`flex flex-col justify-evenly items-center h-[100svh] ${className}`}
    >
      {children}
    </section>
  );
}
