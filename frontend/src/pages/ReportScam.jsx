import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import reportIcon from '../assets/reportIcon.png';
import scamImage from '../assets/reportScamTwo.png'; // Add a picture for the left side

const ReportScam = () => {
  const [scamType, setScamType] = useState('Phishing');
  const [customScamType, setCustomScamType] = useState('');
  const [scamTitle, setScamTitle] = useState('');
  const [description, setDescription] = useState('');
  const [evidenceFile, setEvidenceFile] = useState(null);
  const [shareReport, setShareReport] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalScamType = scamType === 'Other' ? customScamType : scamType;

    if (!finalScamType.trim() || !scamTitle.trim() || !description.trim()) {
      toast.error('Please fill out all required fields.', { position: 'top-center' });
      return;
    }

    const formData = new FormData();
    formData.append('scamType', finalScamType);
    formData.append('scamTitle', scamTitle);
    formData.append('description', description);
    formData.append('shareReport', shareReport); // true or false
    if (evidenceFile) {
      formData.append('evidenceFile', evidenceFile);
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(`${backendUrl}/api/scam-reports/add`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200 || response.status === 201) {
        toast.success('Scam reported successfully!', { position: 'top-center' });
        setScamType('Phishing');
        setCustomScamType('');
        setScamTitle('');
        setDescription('');
        setEvidenceFile(null);
        setShareReport(false);
      } else {
        toast.error('Failed to submit the report. Please try again.', { position: 'top-center' });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'An error occurred. Please try again.',
        { position: 'top-center' }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 px-8 ">
      {/* Page Header */}
      <header className="text-center mb-12">
        <img src={reportIcon} alt="Report Scam Icon" className="mx-auto w-40 h-40" />
        <h1 className="text-4xl font-bold text-red-600 mt-4">Report a Scam</h1>
        <p className="text-gray-600 mt-2">Help us protect the community by reporting suspicious activities.</p>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Picture Section */}
        <div className="lg:w-1/2">
          <img
            src={scamImage}
            alt="Scam awareness"
            className="w-full h-auto mx-auto pt-14"
          />
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Scam Type */}
            <div>
              <label className="block text-gray-700 font-medium">Scam Type</label>
              <select
                value={scamType}
                onChange={(e) => setScamType(e.target.value)}
                className="mt-1 w-full p-3 border rounded-md focus:ring-red-500 focus:border-red-500"
              >
                <option value="Phishing">Phishing</option>
                <option value="Investment Fraud">Investment Fraud</option>
                <option value="Romance Scam">Romance Scam</option>
                <option value="Fake Job Offers">Fake Job Offers</option>
                <option value="Tech Support Scam">Tech Support Scam</option>
                <option value="Other">Other</option>
              </select>
              {scamType === 'Other' && (
                <input
                  type="text"
                  placeholder="Specify Scam Type"
                  value={customScamType}
                  onChange={(e) => setCustomScamType(e.target.value)}
                  className="mt-2 w-full p-3 border rounded-md focus:ring-red-500 focus:border-red-500"
                />
              )}
            </div>

            {/* Scam Title */}
            <div>
              <label className="block text-gray-700 font-medium">Scam Title</label>
              <input
                type="text"
                placeholder="Enter a title for the scam"
                value={scamTitle}
                onChange={(e) => setScamTitle(e.target.value)}
                className="mt-1 w-full p-3 border rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium">Description</label>
              <textarea
                placeholder="Provide a detailed description of the scam"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 w-full p-3 border rounded-md focus:ring-red-500 focus:border-red-500"
                rows="5"
              />
            </div>

            {/* Evidence File */}
            <div>
              <label className="block text-gray-700 font-medium">Upload Evidence (Optional)</label>
              <input
                type="file"
                onChange={(e) => setEvidenceFile(e.target.files[0])}
                className="mt-1 w-full p-3 border rounded-md"
              />
            </div>

            {/* Share Report */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={shareReport}
                onChange={(e) => setShareReport(e.target.checked)}
                className="w-4 h-4 text-red-600 focus:ring-red-500"
              />
              <label className="text-gray-700 font-medium">
                Share this report with the community
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Report'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportScam;
