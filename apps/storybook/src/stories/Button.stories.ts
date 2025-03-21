import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "@repo/ui/button";

const meta = {
  title: "Example/Button",
  component: Button,
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 다음: Story = {
  args: {
    text: "다음",
    className:
      "w-[154px] h-12 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm md:text-base lg:text-lg",
  },
};

export const 이전: Story = {
  args: {
    text: "이전",
    className:
      "w-full h-12 tb:w-[154px] bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm md:text-base lg:text-lg ",
  },
};
