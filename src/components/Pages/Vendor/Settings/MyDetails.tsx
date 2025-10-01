import { useState, ChangeEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  currentPassword: string;
  retypePassword: string;
}

export default function MyDetails() {
  const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false);
  const [showRetypePassword, setShowRetypePassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    currentPassword: '',
    retypePassword: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const EyeIcon = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 9.82422C10.7574 9.82422 9.75 10.8316 9.75 12.0742C9.75 13.3169 10.7574 14.3242 12 14.3242C13.2426 14.3242 14.25 13.3169 14.25 12.0742C14.25 10.8316 13.2426 9.82422 12 9.82422Z" fill="#9E9E9E"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 5.57422C9.38223 5.57422 7.02801 6.6256 5.33162 7.92757C4.48232 8.57941 3.78544 9.30335 3.29649 10.0079C2.81686 10.699 2.5 11.4258 2.5 12.0742C2.5 12.7227 2.81686 13.4494 3.29649 14.1405C3.78544 14.8451 4.48232 15.569 5.33162 16.2209C7.02801 17.5228 9.38223 18.5742 12 18.5742C14.6178 18.5742 16.972 17.5228 18.6684 16.2209C19.5177 15.569 20.2146 14.8451 20.7035 14.1405C21.1831 13.4494 21.5 12.7227 21.5 12.0742C21.5 11.4258 21.1831 10.699 20.7035 10.0079C20.2146 9.30335 19.5177 8.57941 18.6684 7.92757C16.972 6.6256 14.6178 5.57422 12 5.57422ZM8.25 12.0742C8.25 10.0032 9.92893 8.32422 12 8.32422C14.0711 8.32422 15.75 10.0032 15.75 12.0742C15.75 14.1453 14.0711 15.8242 12 15.8242C9.92893 15.8242 8.25 14.1453 8.25 12.0742Z" fill="#9E9E9E"/>
    </svg>
  );

  return (
    <div className="max-w-2xl  p-6 rounded-lg bg-white">
      <div className="space-y-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full px-4 py-3 border border-[#9E9E9E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full px-4 py-3 border border-[#9E9E9E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tim.jennings@example.com"
            className="w-full px-4 py-3 border border-[#9E9E9E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="currentPassword" className="block text-sm font-semibold text-gray-900 mb-2">
            Current Password
          </label>
          <div className="relative">
            <input
              type={showCurrentPassword ? "text" : "password"}
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Enter Password"
              className="w-full px-4 py-3 pr-12 border border-[#9E9E9E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
            >
              <EyeIcon />
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="retypePassword" className="block text-sm font-semibold text-gray-900 mb-2">
            Re-Type Password
          </label>
          <div className="relative">
            <input
              type={showRetypePassword ? "text" : "password"}
              id="retypePassword"
              name="retypePassword"
              value={formData.retypePassword}
              onChange={handleChange}
              placeholder="Enter Password"
              className="w-full px-4 py-3 pr-12 border border-[#9E9E9E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowRetypePassword(!showRetypePassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
            >
              <EyeIcon />
            </button>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-[#FFE135] text-gray-900 font-semibold py-3 px-4 rounded-lg hover:bg-[#ffd700] transition-colors duration-200"
        >
          Update
        </button>
      </div>
    </div>
  );
}