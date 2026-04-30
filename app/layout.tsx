import "./globals.css";

export const metadata = {
  title: "Baxt AS",
  description: "Norges ledende leverandør av bakervarer"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
