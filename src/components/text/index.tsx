/**
 * IMPORTS
 */
import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
export interface ITextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChildren?: boolean;
}

function Text({ size = "md", children, asChildren }: ITextProps) {
  const Component = asChildren ? Slot : "span";

  return (
    <Component
      className={clsx("text-gray-900 font-sans", {
        "text-xs": size === "sm",
        "text-md": size === "md",
        "text-lg": size === "lg",
      })}
    >
      {children}
    </Component>
  );
}

/**
 * EXPORT
 */
export { Text };
