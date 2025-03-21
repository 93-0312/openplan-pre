import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

const customViewports = {
  mobile: {
    name: "Mobile",
    styles: { width: "375px", height: "100%" },
    type: "mobile",
  },
  tablet: {
    name: "Tablet",
    styles: { width: "768px", height: "100%" },
    type: "tablet",
  },
  laptop: {
    name: "desktop",
    styles: { width: "1440px", height: "100%" },
    type: "desktop",
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports, // ✅ 커스텀 뷰포트 적용
    },
  },
};

export default preview;
