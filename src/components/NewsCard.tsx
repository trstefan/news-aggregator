// src/components/NewsCard.tsx

import { NewsArticle } from "@/types/news";
import { formatDistanceToNow } from "date-fns";
import { ExternalLink, Calendar, User } from "lucide-react";
import Image from "next/image";

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  const timeAgo = formatDistanceToNow(new Date(article.publishedAt), {
    addSuffix: true,
  });

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {article.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
            {article.source}
          </span>
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="h-3 w-3 mr-1" />
            <time dateTime={article.publishedAt}>{timeAgo}</time>
          </div>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {article.title}
        </h2>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {article.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t">
          {article.author && (
            <div className="flex items-center text-xs text-gray-500">
              <User className="h-3 w-3 mr-1" />
              <span>{article.author}</span>
            </div>
          )}

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Read more
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </article>
  );
}
