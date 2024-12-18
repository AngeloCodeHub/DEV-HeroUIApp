import "@/styles/global.css";
import { inter } from "./ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-tw">
      <body className={`${inter.className} antialiased`}> {children} </body>
      {/* <body> {children} </body> */}
    </html>
  );
}
