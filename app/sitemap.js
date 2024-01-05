import getAllBlogs from "@/lib/getAllBlogs";

export async function generateSitemaps() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    url: `https://mdadul-blog.vercel.app/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));
}

export default function sitemap() {
  return [
    {
      url: "https://mdadul-blog.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://mdadul-blog.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
