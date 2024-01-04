import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blogPost, slug }) => {
  return (
    <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900 px-px rounded-xl">
      <div className="rounded-[11px] bg-gray-200 dark:bg-gray-800 relative">
        <Image
          src={blogPost?.cover}
          alt="article cover"
          width={1400}
          height={800}
          className="rounded-[7px] w-full aspect-video object-cover"
        />
        <div className="absolute -bottom-8 z-10 flex inset-x-2 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-2">
          <div className="flex items-center gap-x-4">
            <Image
              src={blogPost?.authorImage}
              alt={blogPost?.author}
              width={800}
              height={800}
              className="w-10 h-10 object-cover rounded-full"
            />
            <div>
              <p className="text-gray-800 dark:text-gray-50 font-semibold">
                {blogPost?.author}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {blogPost?.authorRole}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 px-5 pb-5 space-y-4">
        <span className="text-primary  text-sm">{blogPost?.date}</span>
        <h1 className="text-gray-900 dark:text-white text-xl font-semibold">
          {blogPost?.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
          {blogPost?.description}
        </p>
        <Link
          href={`/blogs/${slug}`}
          className="flex items-center gap-x-2 text-primary "
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
