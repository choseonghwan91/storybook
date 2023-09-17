import Button from "@/components/Button";
import ArrowRight from "@/assets/icons/ArrowRight";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    state: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    label: "Button",
    state: "ghost",
  },
};

export const Text: Story = {
  args: {
    label: "Button",
    state: "text",
  },
};

export const Danger: Story = {
  args: {
    label: "Button",
    state: "danger",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Button",
    icon: <ArrowRight color={"#fff"} />,
  },
};
