import React, { useState } from 'react';
import { Search, Filter, Download, BookOpen, Calendar, Users, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';

const categories = [
  "All Categories",
  "GANs & Generative Models",
  "Large Language Models",
  "AI for Creativity & Art",
  "Healthcare & AI",
  "Ethics & Responsible AI"
];

const papers = [
  {
    "title": "Smart Health Record Based Security Analysis in Anomaly Detection Using Artificial Generative Intelligence",
    "authors": "Dr. Rajesh M",
    "category": "Smart Health / IoMT",
    "doi": "Not provided",
    "abstract": "The growing use of a wide range of Internet of Medical Things (IoMT) devices and apps makes smart health an increasingly vulnerable area. One popular method for creating smart city solutions that benefit vital infrastructures over time, such smart healthcare, is IoMT. AI has had a big impact on several industries, including healthcare, as a result of the ongoing technological advancements. Data processing, diagnosis, and the creation of medical images have all been transformed by generative models, a crucial AI technique. Aim of this research is to propose a novel technique in smart health record security analysis by anomaly detection based on artificial generative intelligence (AGI) technique in machine learning. Here the cloud network is deployed with integration of blockchain and an AGI model, in which the smart health records have been stored. For this storage system the anomaly detection has been carried out utilizing a reinforcement adversarial variational encoder with a fuzzy neural network. Experimental analysis is carried out for various smart health record anomaly detection datasets in terms of latency, QoS, detection accuracy, precision, and recall. Proposed technique attained detection accuracy of 98%, QoS of 95%, precision of 96%, latency of 94%, and recall of 97%.",
    "date": "Not provided",
    "citations": 0,
    "downloads": 0,
    "views": 0
  },
  {
    "title": "Artificial Generative Intelligence in Smart Manufacturing Industry with Their Energy Efficiency Analysis",
    "authors": "Dr. Rajesh M",
    "category": "Smart Manufacturing / Energy Efficiency",
    "doi": "Not provided",
    "abstract": "Manufacturers are consistently able to accomplish their main objective of creating an increasing number of items with superior quality at the lowest possible cost thanks to the smart manufacturing revolution. Artificial intelligence and machine learning are the key technologies propelling this new era of innovation. As the production and manufacturing sectors become more digitally advanced, a variety of machine learning approaches are used in manufacturing processes due to the abundance of available data. This research proposes a novel technique in smart manufacturing industry energy efficiency using artificial generative intelligence. The smart manufacturing model has been employed based on artificial generative intelligence and energy efficiency analysis is carried out using a recurrent convolutional Q-kernel particle radial Boltzmann neural network (RCQKPRBNN). Experimental analysis is carried out in terms of training accuracy, energy efficiency, latency, power consumption, and QoS. The proposed technique attained training accuracy of 97%, energy efficiency of 94%, latency of 95%, power consumption of 90%, and QoS of 95%.",
    "date": "Not provided",
    "citations": 0,
    "downloads": 0,
    "views": 0
  },
  {
    "title": "NLP Based Artificial Generative Intelligence in Language Modelling for ChatGPT Application in Classification Analysis",
    "authors": "Dr. Rajesh M",
    "category": "Natural Language Processing / Language Modelling / ChatGPT",
    "doi": "Not provided",
    "abstract": "The user search experience has been completely transformed by intelligent search engines, such as pre-trained generative transformers (GPT). GPT technologies are being used by various industries, such as e-commerce, education, and hospitality, to examine customer ratings and obtain insights that help improve services. This research proposes a novel technique in NLP-based language modelling for ChatGPT using artificial generative intelligence in classification analysis. Here the language modelling in ChatGPT is carried out based on prompt analysis with a gated recurrent BiLSTM model, and the classification is carried out using a multi-layer convolutional Bayes neural network. The experimental analysis is conducted in terms of AUC, F-1 score, recall, detection accuracy, and precision. The suggested method achieved 95% precision, 93% F-1 score, 96% AUC, 98% detection accuracy, and 97% recall. The paper discusses the ramifications of these results and offers solutions for enhancing ChatGPT’s functionality and ethical use in NLP.",
    "date": "Not provided",
    "citations": 0,
    "downloads": 0,
    "views": 0
  },
  {
    "title": "Improved Security Analysis in Financial Services Using Artificial Generative Intelligence Based on Credit Risk Analysis",
    "authors": "Dr. Rajesh M",
    "category": "Financial Services / Security Analysis / Credit Risk Analysis",
    "doi": "Not provided",
    "abstract": "By analysing large datasets to find anomalous patterns and potential security breaches, artificial generative intelligence (AGI) can enhance security in financial services. This enables more proactive and sophisticated security measures compared to traditional methods, including improved threat detection, advanced authentication techniques, and enhanced safeguards for sensitive financial information. This research proposes a novel technique in security enhancement for financial services using artificial generative intelligence for credit risk analysis. Here, the financial services authentication module is deployed using a cloud network and the security analysis is carried out using a cryptographic encryption protocol. Subsequently, credit risk analysis is performed using a convolutional federated Markov decision method. Experimental analysis is carried out in terms of detection accuracy, data integrity, recall, latency, and QoS. The proposed technique achieved detection accuracy of 98%, data integrity of 95%, latency of 93%, QoS of 96%, and recall of 94%.",
    "date": "Not provided",
    "citations": 0,
    "downloads": 0,
    "views": 0
  },
  {
    "title": "Cloud Computing with Blockchain Model and Artificial Generative Intelligence in Resource Task Allocation",
    "authors": "Dr. Rajesh M",
    "category": "Cloud Computing / Resource Allocation / Blockchain",
    "doi": "Not provided",
    "abstract": "The development of generative AI has revolutionised many sectors by enabling the production of intricate, high-quality data outputs. However, challenges in allocating and managing resources often hinder the efficiency of these models, especially in hybrid AI systems. This research proposes a novel technique in cloud computing-based resource task allocation using artificial generative intelligence. Here, resource allocation with task management is performed using a reinforcement variational encoder based gradient policy with a dynamic fuzzy neural network, while the cloud computing network security analysis is carried out using a blockchain graph hash algorithm. Experimental analysis is conducted in terms of resource utilization, latency, throughput, response time, and accuracy. The proposed approach offers robust defense against a dynamic array of security threats, significantly impacting secure data transmission in cloud computing.",
    "date": "Not provided",
    "citations": 0,
    "downloads": 0,
    "views": 0
  }
];


const volumes = [
  {
    id: 4,
    year: 2025,
    issues: [
      { number: 4, month: "April", papers: 12 },
      { number: 3, month: "March", papers: 15 },
      { number: 2, month: "February", papers: 14 },
      { number: 1, month: "January", papers: 13 }
    ]
  },
  {
    id: 3,
    year: 2024,
    issues: Array.from({ length: 12 }, (_, i) => ({
      number: 12 - i,
      month: new Date(2023, 11 - i).toLocaleString('default', { month: 'long' }),
      papers: Math.floor(Math.random() * 10) + 10
    }))
  },
  {
    id: 2,
    year: 2023,
    issues: Array.from({ length: 12 }, (_, i) => ({
      number: 12 - i,
      month: new Date(2022, 11 - i).toLocaleString('default', { month: 'long' }),
      papers: Math.floor(Math.random() * 10) + 10
    }))
  },
  {
    id: 1,
    year: 2022,
    issues: Array.from({ length: 2 }, (_, i) => ({
      number: 12 - i,
      month: new Date(2021, 11 - i).toLocaleString('default', { month: 'long' }),
      papers: Math.floor(Math.random() * 10) + 10
    }))
  }
];

export default function Research() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedVolumes, setExpandedVolumes] = useState<number[]>([]);
  const [selectedIssue, setSelectedIssue] = useState<{ volume: number; issue: number } | null>(null);

  const toggleVolume = (volumeId: number) => {
    setExpandedVolumes(prev =>
      prev.includes(volumeId)
        ? prev.filter(id => id !== volumeId)
        : [...prev, volumeId]
    );
  };

  const selectIssue = (volumeId: number, issueNumber: number) => {
    setSelectedIssue({ volume: volumeId, issue: issueNumber });
    // Here you would typically fetch papers for this specific issue
  };

  const filteredPapers = papers.filter(paper => {
    const matchesCategory = selectedCategory === "All Categories" || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Journal Info</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Impact Factor</h4>
                <p className="text-2xl font-bold text-indigo-600">4.832</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">CiteScore</h4>
                <p className="text-2xl font-bold text-indigo-600">5.1</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">ISSN</h4>
                <p className="text-gray-600">2314-7458</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Archives</h3>
            <div className="space-y-2">
              {volumes.map((volume) => (
                <div key={volume.id} className="border-b border-gray-100 last:border-0">
                  <button
                    onClick={() => toggleVolume(volume.id)}
                    className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <div>
                      <span className="font-medium">Volume {volume.id}</span>
                      <span className="text-sm text-gray-500 ml-2">({volume.year})</span>
                    </div>
                    {expandedVolumes.includes(volume.id) ? (
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                  {expandedVolumes.includes(volume.id) && (
                    <div className="ml-4 mt-1 mb-2 space-y-1">
                      {volume.issues.map((issue) => (
                        <button
                          key={`${volume.id}-${issue.number}`}
                          onClick={() => selectIssue(volume.id, issue.number)}
                          className={`w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors ${
                            selectedIssue?.volume === volume.id && selectedIssue?.issue === issue.number
                              ? 'bg-indigo-50 text-indigo-700'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          Issue {issue.number} • {issue.month}
                          <span className="text-xs text-gray-500 ml-2">
                            ({issue.papers} papers)
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-md ${
                    selectedCategory === category
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search papers..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 h-5 w-5" />
                <select
                  className="border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {selectedIssue && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Volume {selectedIssue.volume}, Issue {selectedIssue.issue}
              </h2>
              <p className="text-gray-600 mt-2">
                Showing papers from {volumes.find(v => v.id === selectedIssue.volume)?.issues.find(i => i.number === selectedIssue.issue)?.month} {volumes.find(v => v.id === selectedIssue.volume)?.year}
              </p>
            </div>
          )}

          {/* Research Papers List */}
          <div className="space-y-6">
            {filteredPapers.map((paper, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-indigo-600">
                      <a href={`/paper/${paper.doi}`}>{paper.title}</a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{paper.authors}</p>
                    <div className="mt-2 flex items-center gap-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        {paper.category}
                      </span>
                      <span className="text-sm text-gray-500">Published: {paper.date}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
                    <Download className="h-4 w-4" />
                    PDF
                  </button>
                </div>
                <p className="mt-4 text-gray-600">{paper.abstract}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-6">
                    <span className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {paper.citations} citations
                    </span>
                    <span className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {paper.downloads} downloads
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {paper.views} views
                    </span>
                  </div>
                  <a
                    href={`https://doi.org/${paper.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    DOI: {paper.doi}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}