import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';

// Helper to wrap tested components in a QueryClientProvider
export function renderWithClient(ui : ReactElement, options?: RenderOptions) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // don’t retry failed queries in tests
      },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
}
