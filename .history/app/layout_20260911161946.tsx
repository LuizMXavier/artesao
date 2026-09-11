import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../app/"

export const metadata: Metadata = {
  title: "Artesao",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}