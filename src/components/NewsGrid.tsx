// src/components/NewsGrid.tsx

import { NewsArticle } from "@/types/news";
import NewsCard from "./NewsCard";

interface NewsGridProps {
  articles: NewsArticle[];
}

export default function NewsGrid({ articles }: NewsGridProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No articles found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}
