import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ReactNode } from 'react';

type Post = {
  slug: string;
  content: string;
  frontmatter: {
    title: string;
    date: string;
  };
};

async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(postsDirectory);

  return files.map((file) => {
    const source = fs.readFileSync(path.join(postsDirectory, file), 'utf-8');
    const { data: frontmatter, content } = matter(source);

    return {
      slug: file.replace('.mdx', ''),
      content,
      frontmatter: frontmatter as Post['frontmatter'],
    };
  });
}

export default async function Page(): Promise<ReactNode> {
  const allPosts = await getPosts();
  const posts = allPosts.filter(post => post.frontmatter);

  return (
    <div>
      {posts.map(post => (
        <div key={post.slug}>{post.frontmatter.title}</div>
      ))}
    </div>
  );
}
