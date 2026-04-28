import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bellring — Celebrate Every Sale",
  description: "Whitelabel sale-celebration SaaS for sales teams. Ring the bell, share the win.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
