import { Providers } from "./providers";

export const metadata = {
  title: "Mini Loja",
  description: "Atividade prática - Integração com API, Zustand e Chakra UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}