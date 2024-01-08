import getAllBlogs from "@/lib/getAllBlogs";
import getBlog from "@/lib/getBlog";
import "@/styles/code.css";
import { notFound } from "next/navigation";
import BlogDetails from "@/components/Blogs/BlogDetails";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = await getBlog(slug);

  return {
    metadataBase: new URL("https://mdadul-blog.vercel.app/"),
    title: blog?.frontMatter?.title,
    description: blog?.frontMatter?.description,
    image: blog?.frontMatter?.cover,
    type: "article",

    openGraph: {
      title: blog?.frontMatter?.title,
      description: blog?.frontMatter?.description,
      url: `https://mdadul-blog.vercel.app/blogs/${blog?.slug}`,
      type: "website",
      images: [
        {
          url: blog?.frontMatter?.cover,
          width: 32,
          height: 32,
          alt: blog?.frontMatter?.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function Blog({ params }) {
  const { slug } = params;

  const blog = await getBlog(slug);

  if (!blog) {
    return notFound();
  }

  return <BlogDetails blog={blog} />;
}
