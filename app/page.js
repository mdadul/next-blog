import BlogSection from "@/components/Blogs/Blogs";
import getAllBlogs from "@/lib/getAllBlogs";
import Link from "next/link";

export default async function Home() {
  const blogs = await getAllBlogs();

  const homepageBlog = blogs.slice(0, 3);

  return (
    <>
      <BlogSection blogs={homepageBlog} />
    </>
  );
}
