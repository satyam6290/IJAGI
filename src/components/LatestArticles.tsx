import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const articles = [
  {
    title: "Advances in Large Language Models: A Comprehensive Review",
    author: "Dr. Sarah Chen",
    date: "2024-03-15",
    category: "Large Language Models",
    abstract: "This paper presents a systematic review of recent developments in large language models...",
  },
  {
    title: "Ethical Considerations in Generative AI Systems",
    author: "Prof. Michael Roberts",
    date: "2024-03-12",
    category: "Ethics & Responsible AI",
    abstract: "An analysis of ethical challenges and proposed solutions in modern generative AI systems...",
  },
  {
    title: "Novel Approaches to GAN Architecture for Medical Imaging",
    author: "Dr. Emily Watson",
    date: "2024-03-10",
    category: "Healthcare & AI",
    abstract: "Introducing innovative GAN architectures specifically designed for medical image generation...",
  }
];

export default function LatestArticles() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
          <button className="flex items-center text-indigo-600 hover:text-indigo-700">
            View all
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="text-sm text-indigo-600 mb-2">{article.category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.abstract}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{article.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}