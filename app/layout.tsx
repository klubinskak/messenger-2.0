import "../styles/globals.css";
import Header from "./Header";
import Providers from "./providers";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Providers>
        <Header/>
        {children}
        </Providers>
      </body>
    </html>
  );
}
