import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../text";
import { CheckBoxRadix, ICheckBoxRootProps } from "./index";

export default {
  title: "Components/CheckBoxRadix",
  component: CheckBoxRadix,
  args: {},
  argTypes: {},
} as Meta<ICheckBoxRootProps>;

//variações que vão ter o CheckBox
export const Default: StoryObj<ICheckBoxRootProps> = {};

export const CheckBoxWithText: StoryObj<ICheckBoxRootProps> = {
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembra-me de min por 30 dias</Text>
        </div>
      );
    },
  ],
};
