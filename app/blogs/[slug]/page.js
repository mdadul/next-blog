import getAllBlogs from "@/lib/getAllBlogs";
import getBlog from "@/lib/getBlog";
import { Calendar } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import langHttp from "highlight.js/lib/languages/http";
import langNginx from "highlight.js/lib/languages/nginx";

import "@/styles/code.css"

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeHighlight,
      { languages: { http: langHttp, nginx: langNginx } },
    ],
  },
};

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
      image: blog?.frontMatter?.cover,
      type: "article",
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
    return <div>Blog not found</div>;
  }

  return (
    <div className="px-6 container py-8 max-w-5xl mx-auto">
      <h1 className="font-semibold text-5xl dark:text-white ">
        {blog?.frontMatter?.title}
      </h1>

      <Image
        src={blog?.frontMatter?.cover}
        alt={blog?.frontMatter?.title}
        width={800}
        height={400}
        className="rounded-lg border p-2 my-4 aspect-auto w-full"
      />
      <div className="flex justify-between my-5">
        <div className="flex gap-2 items-center">
          <Image
            src={blog?.frontMatter?.authorImage}
            alt={blog?.frontMatter?.author}
            width={50}
            height={50}
            className="rounded-full w-10 border h-10"
          />
          <div className="font-sm text-gray-600 dark:text-gray-300">
            <p>{blog?.frontMatter?.author}</p>
            <p>{blog?.frontMatter?.authorRole}</p>
          </div>
        </div>
        <p className="py-2 text-gray-700 dark:text-gray-300 inline-flex gap-2 items-center">
          <Calendar /> {blog?.frontMatter?.date}
        </p>
      </div>

      <hr className="my-5 shadow-sm " />

      <div className="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-base max-w-5xl mx-auto prose-stone dark:prose-invert prose-img:rounded-lg prose-img:aspect-video">
        <MDXRemote source={blog?.content} options={options} />
      </div>
    </div>
  );
}
