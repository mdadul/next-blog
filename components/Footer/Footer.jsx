import Link from "next/link";
import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full dark:bg-gray-900 py-16">
      <div className="md:px-12 lg:px-28">
        <div className="container m-auto space-y-6 text-gray-600 dark:text-gray-300">
          <h2 className="text-lg text-center font-semibold">
            Emdadul&#39;s Blog
          </h2>
          <div className="m-auto flex w-max items-center justify-between space-x-4">
            <Link href="https://github.com/mdadul">
              <Github />
            </Link>
            <Link href="https://www.linkedin.com/in/emdadulislam/">
              <Linkedin />
            </Link>
          </div>

          <div className="text-center">
            <span className="text-sm tracking-wide">
              Copyright ©{year} Emdadul&#39;s Blog
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
