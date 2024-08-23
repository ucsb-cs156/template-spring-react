import "bootstrap/dist/css/bootstrap.css";
import "../src/index.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

const queryClient = new QueryClient();

// Per https://storybook.js.org/docs/react/writing-stories/decorators#context-for-mocking
// Here, we provide the context needed for some of the components,
// e.g. the ones that rely on currentUser

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </QueryClientProvider>
  )
];


/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
