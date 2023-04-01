import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Nav } from "./Nav";

export const NavStory: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export default {
  title: "Layout/Nav",
  component: Nav,
} as ComponentMeta<typeof Nav>;
