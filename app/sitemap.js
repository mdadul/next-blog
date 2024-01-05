import getAllBlogs from "@/lib/getAllBlogs";

export default  async function sitemap() {

    const blogs =await getAllBlogs();

    const staticPages = [
        { url : 'https://mdadul-blog.vercel.app/', lastModified : new Date().toISOString(), changeFrequency : 'weekly', priority : 1 },
        { url : 'https://mdadul-blog.vercel.app/blogs', lastModified : new Date().toISOString(), changeFrequency : 'weekly', priority : 0.9 },
        { url : 'https://mdadul-blog.vercel.app/about', lastModified : new Date().toISOString(), changeFrequency : 'weekly', priority : 0.9 },
        { url : 'https://mdadul-blog.vercel.app/contact', lastModified : new Date().toISOString(), changeFrequency : 'weekly', priority : 0.9 },
    ];

    const dynamicPages =  blogs.map((blog) => ({
        url : `https://mdadul-blog.vercel.app/blogs/${blog.slug}`,
        lastModified : new Date(blog.frontMatter.date).toISOString(),
        changeFrequency : 'weekly',
        priority : 0.7
    }));

    const pages = [...staticPages, ...dynamicPages];

    return pages
}
