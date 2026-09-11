export const metadata = {
  title: "Artesao",
  description: "Testando",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}
      </body>
    </html>
  );
}