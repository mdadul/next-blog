"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeModeToggle } from "../ui/Theme";

const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Blogs",
    url: "/blogs",
  },
  {
    name: "About",
    url: "/about",
  },
];
const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [navbarBg, setNavbarBg] = useState("dark:bg-gray-900");
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };
  const closeNavbar = () => {
    setOpenNavbar(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarBg(
          "backdrop-blur-lg transition-all duration-300 ease-linear "
        );
      } else {
        setNavbarBg("dark:bg-gray-900");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 ${navbarBg}`}>
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 py-4">
        <nav className="w-full flex justify-between gap-6 relative">
          <div className="min-w-max inline-flex relative">
            <Link href="/" className="relative flex items-center gap-3">
              <div className="inline-flex text-lg font-semibold text-gray-900 dark:text-white">
                Emdadul&#39;s Blog
              </div>
            </Link>
          </div>
          <div
            onClick={() => {
              closeNavbar();
            }}
            aria-hidden="true"
            className={`
                        fixed inset-0 bg-gray-800/60 bg-opacity-50 backdrop-filter backdrop-blur-xl
                        ${openNavbar ? "flex lg:hidden" : "hidden"}
                    `}
          />
          <div
            className={`
                        flex  overflow-hidden duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-white dark:bg-gray-950 lg:!bg-transparent border-x border-x-gray-100 dark:border-x-gray-900 lg:border-x-0
                        ${
                          openNavbar
                            ? "visible opacity-100 translate-y-0"
                            : "invisible opacity-0  translate-y-10 lg:visible lg:opacity-100  lg:-translate-y-0"
                        }
                    `}
          >
            <ul className="border-t border-gray-100 dark:border-gray-900 lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-gray-700 dark:text-gray-300 w-full lg:justify-center lg:items-center">
              {navItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="duration-300 font-medium ease-linear hover:text-primary py-3"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="min-w-max flex items-center gap-x-3">
            <ThemeModeToggle />
            <button
              onClick={() => {
                toggleNavbar();
              }}
              className="lg:hidden lg:invisible  outline-none w-7 h-auto flex flex-col relative"
            >
              <span className="sr-only">toggle navbar</span>
              <span
                className={`
                  w-6 h-0.5 rounded-full bg-gray-700 dark:bg-gray-300 transition-transform duration-300 ease-linear
                  ${openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""}
                `}
              />
              <span
                className={`
                  w-6 h-0.5 rounded-full bg-gray-700 dark:bg-gray-300 origin-center  mt-1  transition-all duration-300 ease-linear
                  ${openNavbar ? "scale-x-0 opacity-0" : ""}
                `}
              />
              <span
                className={`
                  w-6 h-0.5 rounded-full bg-gray-700 dark:bg-gray-300 mt-1 transition-all duration-300 ease-linear
                  ${openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""}
                `}
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
