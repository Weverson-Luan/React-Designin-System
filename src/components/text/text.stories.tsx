import { Meta, StoryObj } from "@storybook/react";
import { Text, ITextProps } from "./index";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Component Text",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<ITextProps>;

//variações que vão ter o texto
export const Default: StoryObj<ITextProps> = {};

export const Small: StoryObj<ITextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<ITextProps> = {
  args: {
    size: "lg",
  },
};

//quando usuário precisar passar uma tag especifica que não seja o span
export const CustomComponent: StoryObj<ITextProps> = {
  args: {
    asChildren: true,
    children: <p>Component Text Custom</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChildren: {
      table: {
        disable: true,
      },
    },
  },
};
