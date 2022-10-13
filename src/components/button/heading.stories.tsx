import { Meta, StoryObj } from "@storybook/react";
import { Button, IButtonProps } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Component Button",
  },
  argTypes: {},
} as Meta<IButtonProps>;

//variações que vão ter o button
export const Default: StoryObj<IButtonProps> = {};
