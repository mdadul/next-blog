import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="px-5 grid justify-center md:grid-cols-2 items-center max-w-6xl mx-auto min-h-[80vh]">
      <div>
        <h1 className="text-2xl md:text-7xl font-bold">Blog Not Found</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          The blog you are looking for is not found or does not exist.
        </p>
        <Link href="/">
          <Button className="mt-5" size="lg">
            Go Back to Homepage
          </Button>
        </Link>
      </div>

      <Image
        src="/banner/not-found.gif"
        alt="not-found"
        width={500}
        height={500}
        className="order-first md:order-last"
      />
    </div>
  );
}
