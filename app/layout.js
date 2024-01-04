import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  subsets: ["latin-ext"],
  weight: ["100", "300", "500", "700", "900"],
});

export const metadata = {
  openGraph: {
    title: "Emdadul's Blog ",
    description:
      "A simple personal blog site built with Next.js and TailwindCSS",
    url: "https://mdadul-blog.vercel.app/",
    type: "website",
    images: [
      {
        url: "/emdadul-islam.ico",
        width: 32,
        height: 32,
        alt: "Emdadul's Blog",
      },
    ],
  },

  metadataBase: {
    title: "Emdadul's Blog ",
    description:
      "A simple personal blog site built with Next.js and TailwindCSS",
    url: "https://mdadul-blog.vercel.app/",
    type: "website",
    images: [
      {
        url: "/emdadul-islam.ico",
        width: 32,
        height: 32,
        alt: "Emdadul's Blog",
      },
    ],
  },
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
          <main className="bg-gray-50 dark:bg-gradient-to-t dark:from-slate-900 dark:to-gray-900">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
