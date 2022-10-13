/**
 * IMPORTS
 */
import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
export interface IHeadingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChildren?: boolean;
}

function Heading({ size = "md", children, asChildren }: IHeadingProps) {
  const Component = asChildren ? Slot : "h2";

  return (
    <Component
      className={clsx("text-gray-900 font-bold font-sans", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </Component>
  );
}

/**
 * EXPORT
 */
export { Heading };
