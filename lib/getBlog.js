import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getBlog(slug) {
  const markdownFile = fs.readFileSync(
    path.join("./content", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}
