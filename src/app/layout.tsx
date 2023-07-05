import RootProvider from '@/components/providers/root.provider';
import '@/assets/global-styles.scss';
import Link from 'next/link';

export const metadata = {
  title: 'Test caching',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootProvider>
      <html lang="en">
        <body>
          <nav>
            <ul>
              <li>
                <Link href="/">HomePage</Link>
              </li>
              <li>
                <Link href="/second-page">SecondPage</Link>
              </li>
              <li>
                <Link href="/third-page">ThirdPage</Link>
              </li>
            </ul>
          </nav>
          {children}
        </body>
      </html>
    </RootProvider>
  );
}
