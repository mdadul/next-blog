import { Domine } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const domine = Domine({
  subsets: ["latin-ext"],
  weight: ["400","500","600" ,"700"],
});

export const metadata = {
  metadataBase: new URL("https://mdadul-blog.vercel.app/"),
  title: "Emdadul's Blog ",
  description: "A simple personal blog site built with Next.js and TailwindCSS",
  url: "https://mdadul-blog.vercel.app/",
  type: "website",
  images: [
    {
      url: "https://mdadul-blog.vercel.app/favicon.ico",
      width: 32,
      height: 32,
      alt: "Emdadul's Blog",
    },
  ],

  openGraph: {
    title: "Emdadul's Blog ",
    description:
      "A simple personal blog site built with Next.js and TailwindCSS",
    url: "https://mdadul-blog.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://mdadul-blog.vercel.app/banner/Emdadul-Islam.png",
        width: 32,
        height: 32,
        alt: "Emdadul's Blog",
      },
    ],
  },

  keywords: [
    "Emdadul's Blog",
    "Emdadul Islam",
    "Emdadul",
    "next js blog template",
    "blog template",
    "personal blog site",
    "tailwind blog template",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${domine.className} `}>
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
