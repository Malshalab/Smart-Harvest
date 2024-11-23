import { ThemeProviderWrapper } from "@/app/library/provider/themeProvider";
import { NavbarProvider } from "@/app/library/provider/navbarProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Link to the circular favicon */}
        <link rel="icon" href="/assets/images/appLogo.jpeg" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="description" content="SmartHarvest: Revolutionizing farming with intelligent solutions." />
        <meta name="keywords" content="Smart Harvest, Farming, IoT, Drones, Robotics, Agriculture" />
        <meta name="author" content="SmartHarvest Team" />
        <title>SmartHarvest</title>
      </head>
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