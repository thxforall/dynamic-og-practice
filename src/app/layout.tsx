// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'My NextJS App - Minimal Design',
  description: 'A minimal and clean NextJS application with SEO optimization.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head />
      <body className="bg-white">
        <main>{children}</main>
      </body>
    </html>
  );
}
