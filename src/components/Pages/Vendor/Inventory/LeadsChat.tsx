"use client"
import { useState, useRef } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'opponent';
  time: string;
  image?: string;
}

export default function LeadsChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisl nibh eu.',
      sender: 'opponent',
      time: '10:45'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newMessage: Message = {
          id: messages.length + 1,
          text: '',
          sender: 'user',
          time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
          image: reader.result as string
        };
        setMessages([...messages, newMessage]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen  p-2 sm:p-4 overflow-x-hidden">
      <div className="flex items-center justify-between mb-4 sm:mb-8 px-2 ">
        <div
          onClick={() => window.history.back()}
          className="flex items-center  gap-1 sm:gap-2 text-lg sm:text-[28px] font-semibold cursor-pointer hover:opacity-70 transition-opacity"
        >
          <MdOutlineKeyboardArrowLeft size={24} className="sm:w-[35px] sm:h-[35px]" />
          <span className="hidden sm:inline">Back</span>
          <span className="sm:hidden text-base">Back</span>
        </div>
      </div>

      

      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 min-h-[600px] max-w-7.5xl mx-auto flex flex-col">
        <div className="mb-6 px-2 sm:px-5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">2020 Honda Civic LX</h1>
        </div>
      </div>
        <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 items-start ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {message.sender === 'opponent' && (
                <div className="flex-shrink-0 w-12 h-12">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='24' fill='%23C4C4C4'/%3E%3C/svg%3E"
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              <div className={`flex flex-col max-w-[70%] ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-gray-200 text-gray-900'
                      : 'bg-[#FFFCEB] text-gray-900'
                  }`}
                >
                  {message.image ? (
                    <img src={message.image} alt="Uploaded" className="max-w-36 rounded-lg" />
                  ) : (
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  )}
                </div>
                <span className="text-xs text-gray-500 mt-1 px-2">{message.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4  border-gray-100">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex-shrink-0 w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 18H18C19.1046 18 20 17.1046 20 16V2C20 0.89543 19.1046 0 18 0H2C0.89543 0 0 0.89543 0 2V16C0 17.1046 0.89543 18 2 18ZM2 18L13 7L20 14M7 5.5C7 6.32843 6.32843 7 5.5 7C4.67157 7 4 6.32843 4 5.5C4 4.67157 4.67157 4 5.5 4C6.32843 4 7 4.67157 7 5.5Z" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />

          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm"
          />

          <button
            onClick={handleSend}
            className="flex-shrink-0 w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!inputValue.trim()}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.207 2.33884C14.8628 1.78688 15.6909 1.51119 16.1279 1.94818C16.5647 2.38518 16.2892 3.21352 15.7373 4.86914L12.8994 13.3818C12.1151 15.7348 11.7226 16.9119 11.002 16.912C10.2812 16.912 9.8889 15.735 9.1045 13.3818L8.3555 11.1337L12.709 6.78118C13.0994 6.39073 13.0993 5.75758 12.709 5.36713C12.3185 4.97665 11.6854 4.97665 11.2949 5.36713L6.9414 9.72063L4.6943 8.97156C2.3413 8.18726 1.1642 7.79475 1.1641 7.07412C1.1641 6.35344 2.3411 5.96111 4.6943 5.17673L13.207 2.33884Z" fill="#111827"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
