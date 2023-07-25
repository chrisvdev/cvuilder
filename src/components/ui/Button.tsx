import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export default function Button({ className, children, onClick }: ButtonProps) {
  return (
    <button
      className={`flex justify-center items-center py-2 px-4 w-fit bg-zinc-800 hover:bg-zinc-600 transition-all ${className}`}
      onClick={onClick}
      style={{
        border: `2px solid ${
          ["red", "blue", "green"][Math.floor(Math.random() * 3)]
        }`,
      }}
    >
      {children}
    </button>
  );
}
