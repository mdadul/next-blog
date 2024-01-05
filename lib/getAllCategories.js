import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getAllCategories() {
  const blogDirectory = "./public/content";
  const files = fs.readdirSync(path.join(blogDirectory));
  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(blogDirectory, filename),
      "utf-8"
    );
    const { data } = matter(fileContent);
    return {
      data: data,
      slug: filename.replace(".mdx", ""),
    };
  });

  const categories = blogs.map((blog) => blog.data.category);

  const uniqueCategories = [...new Set(categories)];

  return uniqueCategories;
}
