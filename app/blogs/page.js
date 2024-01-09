import BlogSection from "@/components/Blogs/Blogs";
import getAllBlogs from "@/lib/getAllBlogs";

export default async function Blogs() {
  const blogs = await getAllBlogs();

  return (
    <div>
      <BlogSection blogs={blogs} />
    </div>
  );
}
