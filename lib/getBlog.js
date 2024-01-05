import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export default async function getBlog(slug) {
  try {
    const markdownFile = await fs.readFile(
      path.join("./public/content/", slug + ".mdx"),
      "utf-8"
    );


    const { data: frontMatter, content } = matter(markdownFile);


    return {
      frontMatter,
      slug,
      content,
    };
  } catch (error) {
    // Handle errors here
    console.error(`Error in getBlog(${slug}):`, error);
    return null;
  }
}
