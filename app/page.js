import Navbar from "@/components/Navbar/Navbar";
import getAllBlogs from "@/lib/getAllBlogs";

import Link from "next/link";

export default function Home() {
  const blogs = getAllBlogs();

  return (
    <>
      <Navbar />

      <div className="flex flex-col ">
        {blogs.map((blog, index) => (
          <Link href={`/blogs/${blog.slug}`} key={index}>
            {blog.data.title}
            <br />
            {blog.data.description}
          </Link>
        ))}
      </div>
    </>
  );
}
