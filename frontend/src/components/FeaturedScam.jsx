import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import scamsData from '../data/scams.json'; // Import the JSON data

const FeaturedScam = () => {
  const [scams, setScams] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Most Recent');

  // Fetch scams from the JSON data
  useEffect(() => {
    const fetchScams = () => {
      const filteredScams = category === 'All' ? scamsData : scamsData.filter(scam => scam.category === category);
      const sortedScams = filteredScams.sort((a, b) => {
        if (sortBy === 'Most Upvoted') return b.upvotes - a.upvotes;
        return b.id - a.id; // Sort by Most Recent
      });
      setScams(sortedScams);
    };

    fetchScams();
  }, [category, sortBy, page]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);  // Reset to first page
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setPage(1);  // Reset to first page
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const scamsPerPage = 4; // Number of scams per page
  const startIndex = (page - 1) * scamsPerPage;
  const endIndex = startIndex + scamsPerPage;
  const paginatedScams = scams.slice(startIndex, endIndex);

  return (
    <section className="p-10 ">
      {/* Title and Description */}
      <div className="text-center mb-16 ">
        <h2 className="text-3xl font-semibold text-gray-800">Trending Scams</h2>
        <p className="text-lg text-gray-600">Stay ahead of scammers! Check out the latest reported scams below.</p>
      </div>

      {/* Filter & Sort Section */}
      <div className="flex justify-between mb-8">
        <div className="flex gap-4">
          <select onChange={handleCategoryChange} value={category} className="px-4 py-2 border rounded-md">
            <option value="All">All Categories</option>
            <option value="Phishing">Phishing</option>
            <option value="Investment">Investment</option>
            <option value="Romance">Romance</option>
            {/* Add more categories */}
          </select>
          <select onChange={handleSortChange} value={sortBy} className="px-4 py-2 border rounded-md">
            <option value="Most Recent">Most Recent</option>
            <option value="Most Upvoted">Most Upvoted</option>
          </select>
        </div>
        <div>
          <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} className="px-4 py-2 bg-red-600 text-white rounded-md">Previous</button>
          <span className="px-4 py-2">Page {page}</span>
          <button onClick={() => handlePageChange(page + 1)} className="px-4 py-2 bg-red-600 text-white rounded-md">Next</button>
        </div>
      </div>

      {/* Scam Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {paginatedScams.map(scam => (
          <div key={scam.id} className="bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row items-center">
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
              <img src={scam.image} alt={scam.title} className="w-full h-48 object-cover rounded-lg" />
            </div>
            <div className="w-full sm:w-2/3 sm:pl-6 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-800">{scam.title}</h3>
              <p className="text-sm text-gray-600">{scam.category}</p>
              <p className="text-base text-gray-700 mb-4">{scam.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-2">
                  <button className="text-green-600">Upvote ({scam.upvotes})</button>
                  <button className="text-red-600">Downvote ({scam.downvotes})</button>
                </div>
                <Link to={`/scam/${scam.id}`} className="text-blue-600 hover:underline">Learn More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedScam;
