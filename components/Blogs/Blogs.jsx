import BlogCard from "./Card/Card";

const BlogSection = ({ blogs }) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blogPost={blog?.data} slug={blog?.slug} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
