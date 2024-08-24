import "bootstrap/dist/css/bootstrap.css";
import "../src/index.css";
import { initialize, mswLoader } from 'msw-storybook-addon'

import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

// Initialize MSW
initialize()

// Per https://storybook.js.org/docs/react/writing-stories/decorators#context-for-mocking
// Here, we provide the context needed for some of the components,
// e.g. the ones that rely on currentUser

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <ToastContainer />
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
  loaders: [mswLoader]
};

export default preview;
