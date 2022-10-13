/**
 * IMPORTS
 */
import { InputHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ITextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: ITextInputRootProps) {
  return (
    <div className="flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800 w-full  focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface ITextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: ITextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export interface ITextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: ITextInputInputProps) {
  return (
    <input
      {...props}
      className={clsx(
        "bg-transparent flex-1  outline-none text-gray-100 text-xs placeholder:text-gray-400"
      )}
    />
  );
}

TextInputInput.displayName = "TextInput.Input";

/**
 * EXPORT
 */
export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
