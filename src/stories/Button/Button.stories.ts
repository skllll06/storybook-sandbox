import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button/Normal",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mode: "primary",
    label: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    mode: "secondary",
    label: "Secondary",
  },
};

export const Neon: Story = {
  args: {
    mode: "neon",
    label: "Neon",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Small",
  },
};
