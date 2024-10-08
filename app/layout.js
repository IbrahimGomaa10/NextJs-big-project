import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
        </header>
        <nav>
          <Navigation />
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
