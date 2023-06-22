import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const metadata = {
  title: 'Test caching',
};

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
