// src/components/Header.tsx

import { Newspaper } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Newspaper className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                News Aggregator
              </h1>
              <p className="text-sm text-gray-500">
                Stay informed with the latest headlines
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
