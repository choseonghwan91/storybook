import Input from "../components/Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    placeholder: "플레이스 홀더 텍스트",
  },
};

export const Label: Story = {
  args: {
    label: "인풋 레이블",
    placeholder: "플레이스 홀더 텍스트",
  },
};

export const Active: Story = {
  args: {
    value: "사용자 입력 테스트",
    placeholder: "플레이스 홀더 텍스트",
  },
};

export const ErrorNormal: Story = {
  args: {
    placeholder: "플레이스 홀더 텍스트",
    errorMsg: "에러 메세지",
  },
};

export const ErrorActive: Story = {
  args: {
    value: "사용자 입력 테스트",
    errorMsg: "에러 메세지",
  },
};

export const Disabled: Story = {
  args: {
    label: "인풋 레이블",
    value: "사용자 입력 테스트",
    placeholder: "플레이스 홀더 텍스트",
    disabled: true,
  },
};
