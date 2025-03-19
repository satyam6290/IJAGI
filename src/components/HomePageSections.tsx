import React from 'react';
import myImage from '../assets/images/unlocking.png';
import publish from '../assets/images/publishing.png';
import status from '../assets/images/check.png';
import articles from '../assets/images/headline.png';
import browse from '../assets/images/browsing.png';
import about from '../assets/images/information.png';

const HomePageSections = () => {
  const sections = [
    { title: 'Discover open access', image: myImage, link: '/discover' },
    { title: 'Publish with us', image: publish, link: '/publish' },
    { title: 'Track your research', image: status, link: '/track' },
    { title: 'Featured articles and journals', image: articles, link: '/featured' },
    { title: 'Browse by subject', image: browse, link: '/browse' },
    { title: 'About Springer Nature Link', image: about, link: '/about' },
  ];

  return (
    <div className="overflow-hidden relative mt-12">
      {/* Marquee Wrapper */}
      <div className="flex space-x-6 animate-marquee hover:paused">
        {[...sections, ...sections].map((section, index) => ( // Duplicate for seamless looping
          <a
            href={section.link}
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-all transform hover:scale-110 w-64"
          >
            <img src={section.image} alt={section.title} className="mb-4 rounded-md w-24 h-24 transition-all duration-500" />
            <h3 className="text-xl font-semibold text-gray-800 text-center">{section.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomePageSections;
