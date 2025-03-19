import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const guidelines = [
  {
    title: "File Format",
    description: "Submit your manuscript in PDF format, with LaTeX source files in a ZIP archive.",
    icon: FileText
  },
  {
    title: "Length Requirements",
    description: "Papers should be between 8-12 pages, including figures but excluding references.",
    icon: FileText
  },
  {
    title: "Ethical Guidelines",
    description: "All research must comply with ethical AI principles and include impact statements.",
    icon: CheckCircle
  },
  {
    title: "Code Availability",
    description: "Source code for implementations should be made available via GitHub or similar platforms.",
    icon: AlertCircle
  }
];

export default function Submit() {
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    abstract: '',
    category: '',
    email: '',
    codeUrl: ''
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here
    console.log({ ...formData, file });
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Submit Your Research
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Share your groundbreaking research in generative AI with the academic community
        </p>
      </div>

      {/* Guidelines Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Submission Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guidelines.map((guideline, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <guideline.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{guideline.title}</h3>
                <p className="mt-2 text-gray-600">{guideline.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submission Form */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Paper Submission Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Paper Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="authors" className="block text-sm font-medium text-gray-700">
              Authors (comma-separated)
            </label>
            <input
              type="text"
              id="authors"
              value={formData.authors}
              onChange={(e) => setFormData({ ...formData, authors: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Corresponding Author Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Research Category
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="">Select a category</option>
              <option value="GANs">GANs & Generative Models</option>
              <option value="LLM">Large Language Models</option>
              <option value="Creative">AI for Creativity & Art</option>
              <option value="Healthcare">Healthcare & AI</option>
              <option value="Ethics">Ethics & Responsible AI</option>
            </select>
          </div>

          <div>
            <label htmlFor="abstract" className="block text-sm font-medium text-gray-700">
              Abstract
            </label>
            <textarea
              id="abstract"
              rows={4}
              value={formData.abstract}
              onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="codeUrl" className="block text-sm font-medium text-gray-700">
              Code Repository URL
            </label>
            <input
              type="url"
              id="codeUrl"
              value={formData.codeUrl}
              onChange={(e) => setFormData({ ...formData, codeUrl: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="https://github.com/username/repository"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Manuscript (PDF)
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".pdf"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF up to 10MB</p>
                {file && (
                  <p className="text-sm text-indigo-600">Selected: {file.name}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Paper
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}