import React from 'react';
import { Users, BookOpen, Shield } from 'lucide-react';

const editorialBoard = [
  {
    name: 'Prof. Elena Martinez',
    role: 'Editor-in-Chief',
    affiliation: 'Stanford University',
    expertise: 'Large Language Models, Neural Networks',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Dr. James Wilson',
    role: 'Associate Editor',
    affiliation: 'MIT',
    expertise: 'Generative AI, Ethics in AI',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Dr. Sophia Chen',
    role: 'Associate Editor',
    affiliation: 'Berkeley',
    expertise: 'Computer Vision, GANs',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Mission Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Advancing the field of generative AI through rigorous peer review, ethical considerations,
            and promotion of innovative research that pushes the boundaries of artificial intelligence.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mx-auto">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Open Access Research</h3>
              <p className="mt-2 text-base text-gray-500">
                Making cutting-edge AI research accessible to everyone through our open access platform.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mx-auto">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Ethical AI Development</h3>
              <p className="mt-2 text-base text-gray-500">
                Promoting responsible AI development with strong ethical guidelines and oversight.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Global Collaboration</h3>
              <p className="mt-2 text-base text-gray-500">
                Fostering international collaboration between researchers, institutions, and industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Board Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Editorial Board</h2>
            <p className="mt-4 text-lg text-gray-500">
              Our distinguished editorial board comprises leading experts in AI and machine learning.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {editorialBoard.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <img
                    className="h-24 w-24 rounded-full mx-auto"
                    src={member.image}
                    alt={member.name}
                  />
                  <h3 className="mt-4 text-center text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-center text-indigo-600">{member.role}</p>
                  <p className="mt-1 text-center text-gray-500">{member.affiliation}</p>
                  <p className="mt-3 text-center text-sm text-gray-600">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}