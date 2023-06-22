import RootProvider from '@/components/providers/root.provider';
import '@/assets/global-styles.scss';

export const metadata = {
  title: 'Test caching',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </RootProvider>
  );
}
