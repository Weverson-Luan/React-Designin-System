import { Meta, StoryObj } from "@storybook/react";
import { Heading, IHeadingProps } from "./index";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Component Heading",
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
} as Meta<IHeadingProps>;

//variações que vão ter o texto
export const Default: StoryObj<IHeadingProps> = {};

export const Small: StoryObj<IHeadingProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<IHeadingProps> = {
  args: {
    size: "lg",
  },
};

//quando usuário precisar passar uma tag especifica que não seja o span
export const CustomComponent: StoryObj<IHeadingProps> = {
  args: {
    asChildren: true,
    children: <h1>Component Heading Custom</h1>,
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
