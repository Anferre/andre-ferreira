import "./globals.css";

export const metadata = {
  title: "André de Oliveira Ferreira | Cloud & DevOps Engineer",
  description:
    "Portfólio de André de Oliveira Ferreira, Cloud/DevOps Engineer com foco em IA, cibersegurança e governança.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
