import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'; // Import axios for making HTTP requests
import report from '../assets/reportScam.png';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

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

    // Create a FormData object to handle file and form data
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
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center">
      {/* Title and Subheading */}
      <h2 className="text-3xl font-semibold mb-4 text-center">Report a Scam</h2>
      <p className="text-lg mb-6 text-center">
        If you've encountered a scam, share it with us to help others avoid it.
      </p>

      {/* Row Layout: Image on Left, Form on Right */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img src={report} alt="Report Scam" className="w-full h-auto" />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Scam Type */}
            <div>
              <label className="block text-gray-700">Scam Type</label>
              <select
                value={scamType}
                onChange={(e) => setScamType(e.target.value)}
                className="w-full p-3 border rounded-md"
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
                  className="mt-2 w-full p-3 border rounded-md focus:ring-yellow-500 focus:yellow-red-500"
                />
              )}
            </div>

            {/* Scam Title */}
            <div>
              <label className="block text-gray-700">Scam Title</label>
              <input
                type="text"
                value={scamTitle}
                onChange={(e) => setScamTitle(e.target.value)}
                className="w-full p-3 border rounded-md"
                placeholder="Enter a short title for the scam"
              
              />
            </div>

            {/* Scam Description */}
            <div>
              <label className="block text-gray-700">Scam Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 border rounded-md"
                placeholder="Provide a detailed description of the scam"
                rows="4"
                required
              />
            </div>

            {/* Scam Evidence */}
            <div>
              <label className="block text-gray-700">Scam Evidence (Optional)</label>
              <input
                type="file"
                onChange={(e) => setEvidenceFile(e.target.files[0])}
                className="w-full p-3 border rounded-md"
              />
            </div>

            {/* Privacy and Consent */}
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={shareReport}
                onChange={(e) => setShareReport(e.target.checked)}
                className="w-4 h-4 text-yellow-600 focus:ring-yellow-500"
              />
              <label htmlFor="agree" className="text-gray-700">
                I agree to share this report with the Scam Alert community.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
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
