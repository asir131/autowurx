import { useState } from 'react';

interface TermsData {
  introText: string;
  section1: string[];
  section2: string[];
}

export default function TermsOfCondition() {
  const [terms, setTerms] = useState<TermsData>({
    introText: 'We collect several types of information from and about users of our website and services, including:',
    section1: [
      'Personal Information: Information that identifies you personally, such as your name, email address, postal address, phone number, and any other identifier by which you may be contacted online or offline.',
      'Non-Personal Information: Information that does not identify you personally, including but not limited to usage data, general demographic information, and statistical or aggregated data.',
      'Non-Personal Information: Information that does not identify you personally, including but not limited to usage data, general demographic information, and statistical or aggregated data.',
      'Non-Personal Information: Information that does not identify you personally, including but not limited to usage data, general demographic information, and statistical or aggregated data.',
      'Non-Personal Information: Information that does not identify you personally, including but not limited to usage data, general demographic information, and statistical or aggregated data.'
    ],
    section2: [
      'Personal Information: Information that identifies you personally, such as your name, email address, postal address, phone number, and any other identifier by which you may be contacted online or offline.',
      'Non-Personal Information: Information that does not identify you personally, including but not limited to usage data, general demographic information, and statistical or aggregated data.',
      'Non-Personal Information: Information that does not identify you personally, including but not limited to usage data, general demographic information, and statistical or aggregated data.',
      'Non-Personal Information: Information that does not identify you personally, including but not limited to usage data, general demographic information, and statistical or aggregated data.',
      'Non-Personal Information: Information that does not identify you personally, including but not limited to usage data, general demographic information, and statistical or aggregated data.'
    ]
  });

  const handleIntroChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTerms({
      ...terms,
      introText: e.target.value
    });
  };

  const handleSection1Change = (index: number, value: string) => {
    const newSection = [...terms.section1];
    newSection[index] = value;
    setTerms({
      ...terms,
      section1: newSection
    });
  };

  const handleSection2Change = (index: number, value: string) => {
    const newSection = [...terms.section2];
    newSection[index] = value;
    setTerms({
      ...terms,
      section2: newSection
    });
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  const handleUpdate = () => {
    console.log('Updated terms:', terms);
  };

  return (
    <div className="max-w-full mx-auto p-10 bg-white">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Terms of Condition</h1>
      
      <div className="mb-4">
        <textarea
          value={terms.introText}
          onChange={handleIntroChange}
          className="w-full px-0 py-0 text-sm text-gray-700 leading-relaxed border-0 focus:outline-none focus:ring-0 resize-none"
          rows={1}
        />
      </div>

      {/* Section 1 */}
      <div className="mb-8 border p-2 rounded-lg px-5">
        {terms.section1.map((item, index) => (
          <div key={index} className="flex gap-2 mb-3">
            <span className="text-sm text-gray-700 flex-shrink-0">
              {index + 1}.
            </span>
            <textarea
              value={item}
              onChange={(e) => handleSection1Change(index, e.target.value)}
              className="flex-1 px-0 py-0 text-sm text-gray-700 leading-relaxed border-0 focus:outline-none focus:ring-0 resize-none"
              rows={2}
            />
          </div>
        ))}
      </div>

      {/* Section 2 */}
      <div className="mb-6 border p-2 rounded-lg px-5">
        {terms.section2.map((item, index) => (
          <div key={index} className="flex gap-2 mb-3">
            <span className="text-sm text-gray-700 flex-shrink-0">
              {index + 1}.
            </span>
            <textarea
              value={item}
              onChange={(e) => handleSection2Change(index, e.target.value)}
              className="flex-1 px-0 py-0 text-sm text-gray-700 leading-relaxed border-0 focus:outline-none focus:ring-0 resize-none"
              rows={2}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-8">
        <button
          onClick={handleCancel}
          className="px-5 py-2 text-sm font-normal text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleUpdate}
          className="px-5 py-2 text-sm font-normal text-gray-900 bg-[#FFE135] rounded-md hover:bg-[#ffd700] transition-colors"
        >
          Update
        </button>
      </div>
    </div>
  );
}