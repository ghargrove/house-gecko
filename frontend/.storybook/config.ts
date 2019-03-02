import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/App.story.tsx');
}

configure(loadStories, module);
