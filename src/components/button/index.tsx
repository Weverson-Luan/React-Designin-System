/**
 * IMPORTS
 */
import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface IButtonProps {
  children: ReactNode;
  asChildren?: boolean;
}

function Button({ children, asChildren }: IButtonProps) {
  const Component = asChildren ? Slot : "button";

  return (
    <Component
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-neutral"
      )}
    >
      {children}
    </Component>
  );
}

/**
 * EXPORT
 */
export { Button };
