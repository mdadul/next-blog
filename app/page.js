import BlogSection from "@/components/Blogs/Blogs";
import getAllBlogs from "@/lib/getAllBlogs";

export default async function Home() {
  const blogs = await getAllBlogs();

  return (
    <>
      <BlogSection blogs={blogs} />
    </>
  );
}
