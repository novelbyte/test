import Link from "next/link";
import { getAllPosts } from "@/app/lib/mdx";

export default async function BlogPage() {
  // Pobieramy wszystkie posty asynchronicznie, jeśli getAllPosts jest async
  const allPosts = await getAllPosts();

  // Filtrujemy tylko te z frontmatter
  const posts = allPosts?.filter(post => post.frontmatter) || [];

  if (posts.length === 0) {
    return (
      <section className="bg-[#0f172a] min-h-screen p-8 flex items-center justify-center">
        <h1 className="text-2xl text-white">Brak postów do wyświetlenia</h1>
      </section>
    );
  }

  return (
    <section className="bg-[#0f172a] min-h-screen p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Blog</h1>
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
        {posts.map((post) => {
          const { frontmatter, content, slug } = post;
          return (
            <Link key={slug} href={`/blog/${slug}`}>
              <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <h2 className="text-xl font-bold text-white mb-2">
                  {frontmatter?.title || "Brak tytułu"}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  Autor: {frontmatter?.author || "Nieznany"} | {frontmatter?.date || "Brak daty"}
                </p>
                <p className="text-gray-300">
                  {frontmatter?.excerpt || content?.slice(0, 120) || "Brak treści"}...
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
