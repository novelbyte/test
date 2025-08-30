import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
const files = fs.readdirSync(postsDirectory);

const allPosts = files.map((file) => {
  const source = fs.readFileSync(path.join(postsDirectory, file), 'utf-8');
  const { data: frontmatter, content } = matter(source);

  return {
    slug: file.replace('.mdx', ''),
    content,
    frontmatter,  // <- to musi być tutaj!
  };
});

const posts = allPosts.filter(post => post.frontmatter);
