import ApiProvider from './api.provider';

export default function RootProvider({ children }: { children: React.ReactNode }) {
  return <ApiProvider>{children}</ApiProvider>;
}
