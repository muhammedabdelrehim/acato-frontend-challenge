import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
const req = require.context("../stories/components/../", true, /stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
