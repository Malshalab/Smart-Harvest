import { ThemeProviderWrapper } from "@/app/library/provider/themeProvider";
import { NavbarProvider } from "@/app/library/provider/navbarProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>
          <NavbarProvider>
            {children}
          </NavbarProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}