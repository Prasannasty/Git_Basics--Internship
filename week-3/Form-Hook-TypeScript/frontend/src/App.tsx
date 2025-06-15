import React from 'react';
import FormComponent from './components/FormComponent';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FormComponent />
    </QueryClientProvider>
  );
};

export default App;
