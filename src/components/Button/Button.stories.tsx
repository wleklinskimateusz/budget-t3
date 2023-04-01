import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { Button, sizes, variants } from "./Button";

const ButtonStory: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = ButtonStory.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary",
  size: "medium",
};

export const Secondary = ButtonStory.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary",
  size: "medium",
};

export const Danger = ButtonStory.bind({});
Danger.args = {
  variant: "danger",
  children: "Danger",
  size: "medium",
};

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: variants,
      },
    },
    onClick: { action: "clicked" },
    size: {
      control: {
        type: "select",
        options: sizes,
      },
    },
  },
} as ComponentMeta<typeof Button>;
