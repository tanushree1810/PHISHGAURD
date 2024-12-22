import React, { useState, useEffect } from 'react';

const BrowseScams = () => {
  const [scams, setScams] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const fetchScams = async () => {
    setLoading(true);
    setError(null);
    try {
      const queryParams = new URLSearchParams({
        page,
        limit: 4,
        ...(category !== 'All' && { scamType: category }),
        ...(search && { search }),
      }).toString();

      const response = await fetch(`${backendURL}/api/browse/browse-reports?${queryParams}`);
      const data = await response.json();

      if (data.success) {
        setScams(data.reports);
        setTotalPages(data.totalPages);
      } else {
        setError(data.message || 'Failed to fetch scam reports');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while fetching scam reports');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScams(); // Fetch scams immediately on category change or pagination
  }, [page, category]);

  const handleSearch = () => {
    setPage(1); // Reset to the first page
    fetchScams(); // Trigger search only when the button is clicked
  };

  return (
    <section className="p-10">
      {/* Title and Description */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-red-600">Browse Scams</h2>
        <p className="text-lg text-gray-600 mt-2">
          Discover the latest scams reported by users. Filter by category or search for specific scams to stay informed.
        </p>
      </div>

      {/* Filter & Search Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-4">
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="px-4 py-2 border rounded-md"
          >
            <option value="All">All Categories</option>
            <option value="Phishing">Phishing</option>
            <option value="Investment">Investment</option>
            <option value="Romance">Romance</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-md"
          />
          <button onClick={handleSearch} className="px-4 py-2 bg-red-600 text-white rounded-md">
            Search for Scam
          </button>
        </div>
      </div>

      {/* Loading and Error States */}
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {/* Scam Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {scams.map((scam) => (
          <div
            key={scam._id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-wrap items-start"
          >
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
              <img
                src={scam.evidenceUrl || '/placeholder.png'}
                alt={scam.scamTitle}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="w-full sm:w-2/3 sm:pl-6">
              <h3 className="text-xl font-semibold text-red-600 mb-2">{scam.scamTitle}</h3>
              <p className="text-sm text-gray-600 mb-2 font-bold">Category: {scam.scamType}</p>
              <p className="text-gray-700 mb-4">{scam.description}</p>
              <p className="text-gray-500 text-sm">Reported on: {new Date(scam.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-red-600 text-white rounded-md mx-2 hover:bg-red-700 transition-colors"
        >
          Previous
        </button>
        <span className="text-lg text-gray-700">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 bg-red-600 text-white rounded-md mx-2 hover:bg-red-700 transition-colors"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default BrowseScams;
