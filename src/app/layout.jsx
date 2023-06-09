import "@/styles/style.scss";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="l-body">
        <main className="l-main">{children}</main>
      </body>
    </html>
  );
}
