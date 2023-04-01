import "../src/styles/globals.css";
import Link from "next/link";
import { action } from "@storybook/addon-actions";

Object.defineProperty(Link, "default", {
  configurable: true,
  value: (props) => (
    <a
      onClick={(e) => {
        e.preventDefault();
        action("Link clicked")(props.href);
      }}
      {...props}
    />
  ),
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
