import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export default async function getAllBlogs() {
  try {
    const blogDirectory = "./public/content";
    const files = await fs.readdir(path.join(blogDirectory));
    const blogs = await Promise.all(
      files.map(async (filename) => {
        const fileContent = await fs.readFile(
          path.join(blogDirectory, filename),
          "utf-8"
        );
        const { data } = matter(fileContent);
        return {
          data: data,
          slug: filename.replace(".mdx", ""),
        };
      })
    );
    return blogs;
  } catch (error) {
    // Handle errors here
    console.error("Error in getAllBlogs:", error);
    return [];
  }
}
