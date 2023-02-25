import type { Meta, StoryFn } from "@storybook/react";
import { Home } from "./Home";

export default {
  component: Home,
  parameters: {
    layout: "fullscreen",
    a11y: {
      config: {
        rules: [
          {
            id: "heading-order",
            enabled: false,
          },
          {
            id: "duplicate-id",
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta<typeof Home>;

export const Homepage = {
  render: () => <Home />,
};
