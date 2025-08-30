import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/app/content");

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);
    return {
      slug: filename.replace(/\.mdx$/, ""),
      ...data,
      content,
    };
  });
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);
  return { slug, ...data, content };
}
