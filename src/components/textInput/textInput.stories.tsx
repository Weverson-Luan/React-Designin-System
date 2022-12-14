import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInput, ITextInputRootProps } from "./index";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type you e-mail address" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ITextInputRootProps>;

//variações que vão ter o textInput
export const Default: StoryObj<ITextInputRootProps> = {};

export const WithoutIcon: StoryObj<ITextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type you e-mail address" />,
  },
};
