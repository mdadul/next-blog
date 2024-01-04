import BlogSection from "@/components/Blogs/Blogs";
import Navbar from "@/components/Navbar/Navbar";
import getAllBlogs from "@/lib/getAllBlogs";

import Link from "next/link";

export default function Home() {
  const blogs = getAllBlogs();

  return (
    <>
      <Navbar />
      <BlogSection blogs={blogs}/>
    </>
  );
}
