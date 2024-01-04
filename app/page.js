import BlogSection from "@/components/Blogs/Blogs";
import getAllBlogs from "@/lib/getAllBlogs";

export default function Home() {
  const blogs = getAllBlogs();

  return (
    <>
      <BlogSection blogs={blogs} />
    </>
  );
}
