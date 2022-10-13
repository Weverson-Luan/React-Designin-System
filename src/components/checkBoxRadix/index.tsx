/**
 * IMPORTS
 */
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface ICheckBoxRootProps {}

function CheckBoxRadix({}: ICheckBoxRootProps) {
  return (
    <Checkbox.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
      <Checkbox.Indicator asChild>
        <Check weight="bold" className="w-5 h-5 text-cyan-500" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}

/**
 * EXPORT
 */
export { CheckBoxRadix };
