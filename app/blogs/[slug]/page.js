import getBlog from "@/lib/getBlog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import remarkGfm from "remark-gfm";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = getBlog(slug);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
    image: blog.frontMatter.cover,
    date: blog.frontMatter.date,
    type: "article",
    openGraph: {
      title: blog.frontMatter.title,
      description: blog.frontMatter.description,
      image: blog.frontMatter.cover,
      type: "article",
    },
    metadataBase: {
      title: blog.frontMatter.title,
      description: blog.frontMatter.description,
      image: blog.frontMatter.cover,
      type: "article",
    },
  };
}

export default function Blog({ params }) {
  const { slug } = params;

  const blog = getBlog(slug);

  return (
    <div className="px-6 container py-8 max-w-5xl mx-auto">
      <h1 className="font-semibold text-5xl dark:text-white ">
        {blog.frontMatter.title}
      </h1>
      <p className="py-2 text-gray-700 dark:text-gray-300">
        {blog.frontMatter.date}
      </p>
      <div className="flex gap-2 items-center">
        <Image
          src={blog.frontMatter.authorImage}
          alt={blog.frontMatter.author}
          width={50}
          height={50}
          className="rounded-full w-10 border h-10"
        />
        <div className="font-sm text-gray-600 dark:text-gray-300">
          <p>{blog?.frontMatter?.author}</p>
          <p>{blog?.frontMatter?.authorRole}</p>
        </div>
      </div>
      <Image
        src={blog.frontMatter.cover}
        alt={blog.frontMatter.title}
        width={800}
        height={400}
        className="rounded-lg border p-2 my-4 aspect-auto w-full"
      />

      <div className="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-base max-w-5xl mx-auto prose-stone dark:prose-invert prose-img:rounded-lg">
        <MDXRemote source={blog.content} options={options} />
      </div>
    </div>
  );
}
