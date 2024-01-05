import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <div className="px-5 grid justify-center md:grid-cols-2 items-center max-w-6xl mx-auto min-h-[80vh]">
      <div>
        <h1 className="text-2xl md:text-8xl font-bold">Not Found</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          The page you are looking for is not found or does not exist.
        </p>
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
