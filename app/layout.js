import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import Navbar from "@/components/Navbar/Navbar";

const roboto = Roboto({
  subsets: ["latin-ext"],
  weight: ['100','300','500','700','900']
});

export const metadata = {
  title: "Blog App - Next.js",
  description: "A simple blog app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
