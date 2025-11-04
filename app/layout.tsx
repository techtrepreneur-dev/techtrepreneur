import type { Metadata } from "next";
import "./globals.css";
import 'aos/dist/aos.css'; // The AOS CSS
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import AosWrapper from "@/components/AosWrapper";
import ProviderWrapper from "../components/localization-provider/ProviderWrapper";

export const metadata: Metadata = {
  title: "Techtrepreneur"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>
          <Navigation />
          <main>
            <AosWrapper>
              {children}
            </AosWrapper>
          </main>
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}
