import getBlog from "@/lib/getBlog";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from 'remark-gfm'

const options = {
    mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
    }
}





export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = getBlog(slug);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}

export default function Blog({ params }) {
  const { slug } = params;

  const blog = getBlog(slug);

  return (
    <article className="">
      <h1>{blog.frontMatter.title}</h1>

      <MDXRemote source={blog.content} options={options}/>
    </article>
  );
}
