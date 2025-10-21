// src/lib/newsService.ts

import { NewsArticle } from "@/types/news";

// Mock data for initial development
const mockArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Global Markets Surge Amid Economic Optimism",
    description:
      "Stock markets around the world experienced significant gains as economic indicators point to sustained growth.",
    url: "https://example.com/article-1",
    source: "BBC",
    publishedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    imageUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    author: "Jane Smith",
  },
  {
    id: "2",
    title: "Tech Giants Announce New AI Partnerships",
    description:
      "Major technology companies have formed strategic alliances to advance artificial intelligence development.",
    url: "https://example.com/article-2",
    source: "CNN",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    author: "John Doe",
  },
  {
    id: "3",
    title: "Climate Summit Reaches Historic Agreement",
    description:
      "World leaders have agreed on ambitious targets to combat climate change at the international summit.",
    url: "https://example.com/article-3",
    source: "Politico",
    publishedAt: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
    imageUrl:
      "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=400&fit=crop",
    author: "Sarah Johnson",
  },
  {
    id: "4",
    title: "New Healthcare Policy Reforms Announced",
    description:
      "Government unveils comprehensive healthcare reforms aimed at improving accessibility and affordability.",
    url: "https://example.com/article-4",
    source: "BBC",
    publishedAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    imageUrl:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=400&fit=crop",
  },
  {
    id: "5",
    title: "Space Agency Plans Mars Mission for 2026",
    description:
      "Scientists reveal detailed plans for the next generation of Mars exploration missions.",
    url: "https://example.com/article-5",
    source: "CNN",
    publishedAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
    imageUrl:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&h=400&fit=crop",
    author: "Mike Chen",
  },
];

export async function fetchNews(): Promise<NewsArticle[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockArticles;
}
