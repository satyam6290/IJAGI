import React from 'react';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const events = [
  {
    title: "IJAGI Annual Conference 2024",
    date: "October 15-17, 2024",
    location: "Stanford University, CA",
    type: "Conference",
    description: "Join us for the premier conference in generative AI research, featuring keynote speakers from leading institutions and industry partners.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Ethics in AI Workshop",
    date: "July 8-9, 2024",
    location: "Virtual Event",
    type: "Workshop",
    description: "A two-day workshop focusing on ethical considerations in generative AI development and deployment.",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Healthcare AI Symposium",
    date: "September 5, 2024",
    location: "Boston, MA",
    type: "Symposium",
    description: "Exploring the latest advances in generative AI applications in healthcare and medical imaging.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }
];

const upcomingWebinars = [
  {
    title: "Introduction to GANs",
    date: "April 5, 2024",
    speaker: "Dr. Ian Goodfellow",
    registration: "https://webinar-registration.com/gans"
  },
  {
    title: "Future of Language Models",
    date: "April 12, 2024",
    speaker: "Dr. Emily Bender",
    registration: "https://webinar-registration.com/llm"
  },
  {
    title: "AI Art Generation",
    date: "April 19, 2024",
    speaker: "Prof. Aaron Hertzmann",
    registration: "https://webinar-registration.com/ai-art"
  }
];

export default function Events() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Featured Events */}
      <div className="mb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Events</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full">
                  {event.type}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    {event.location}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Webinars */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Upcoming Webinars</h2>
          <Users className="h-6 w-6 text-indigo-600" />
        </div>
        <div className="divide-y divide-gray-200">
          {upcomingWebinars.map((webinar, index) => (
            <div key={index} className="py-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{webinar.title}</h3>
                <div className="mt-1 flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {webinar.date}
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Presented by: {webinar.speaker}
                </div>
              </div>
              <a
                href={webinar.registration}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-indigo-600 hover:text-indigo-800"
              >
                Register
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}