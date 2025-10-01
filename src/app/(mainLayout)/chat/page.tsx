"use client"

import { useState } from "react"
import { Search, Send, Paperclip } from "lucide-react"
import Image from "next/image"
import BMW from "@/assets/chat/bmw.png"
import Hand from "@/assets/chat/hand.png"

// Define proper types for messages
interface Message {
  id: string
  content?: string
  imageSrc?: string | typeof BMW // Separate field for image sources
  timestamp: string
  isOwn: boolean
  isImage?: boolean
  avatar?: string | typeof BMW
}

interface Conversation {
  id: string
  name: string
  lastMessage: string
  timestamp: string
  avatar: string | typeof BMW
}

// Mock data for conversations
const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "2022 BMW X5 M Sport",
    lastMessage: "Vel et commodo et scelerisque aliquam...",
    timestamp: "11:04",
    avatar: BMW,
  },
  {
    id: "2",
    name: "2022 BMW X5 M Sport",
    lastMessage: "Thu",
    timestamp: "Thu",
    avatar: BMW,
  },
  {
    id: "3",
    name: "2022 BMW X5 M Sport",
    lastMessage: "08/09",
    timestamp: "08/09",
    avatar: BMW,
  },
]

// Mock messages for the selected conversation
const mockMessages: Message[] = [
  {
    id: "1",
    content:
      "Vel et commodo et scelerisque aliquam. Sed libero non praesent felis, sem eget venenatis neque. Massa tincidunt tempor a nisl est mauris lectus. Amet lobortis auctor et egestas senean. Rhoncus orci nunc lectus morbi duis sem diam. Sed gravida eget tempor vulputate vitae.",
    timestamp: "10:16",
    isOwn: false,
    avatar: BMW,
  },
  {
    id: "2",
    imageSrc: BMW, // Use imageSrc instead of content for images
    timestamp: "10:16",
    isOwn: false,
    isImage: true,
    avatar: BMW,
  },
  {
    id: "3",
    content:
      "Est, eget est duis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisl nibh eu.",
    timestamp: "10:45",
    isOwn: true,
  },
  {
    id: "4",
    content:
      "Vestibulum viverra lacus, congue scelerisque neque. Viverra cursus nisl, in purus dolor at. Nec sed eget scelerisque imperdiet consectetur. Pellentesque aliquam et posuere massa aliquam. Pulvinar",
    timestamp: "11:04",
    isOwn: false,
    avatar: BMW,
  },
  {
    id: "5",
    content: "Donec lobortis mattis pellentesque nisl nibh eu.",
    timestamp: "12:37",
    isOwn: true,
  },
  {
    id: "6",
    content: "Oh lets do it!",
    timestamp: "11:04",
    isOwn: false,
    avatar: BMW,
  },
]

export default function ChatPage() {
  const [selectedConversation, setSelectedConversation] = useState<string>("")
  const [searchQuery, setSearchQuery] = useState("")
  const [messageInput, setMessageInput] = useState("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const selectedConv = mockConversations.find((c) => c.id === selectedConversation)

  const handleConversationSelect = (id: string) => {
    setSelectedConversation(id)
    setIsSidebarOpen(false) // Close sidebar on mobile after selection
  }

  return (
    <div className="md:min-h-screen mt-10 md:mt-0 bg-gray-100 p-2 sm:p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex h-[calc(100vh-1rem)] sm:h-[800px]">
          {/* Mobile Menu Button */}
          {selectedConversation && (
            <div className="md:hidden absolute top-4 left-4 z-20">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 bg-white rounded-lg shadow-md border border-gray-200"
              >
                <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-gray-600"></div>
                  <div className="w-full h-0.5 bg-gray-600"></div>
                  <div className="w-full h-0.5 bg-gray-600"></div>
                </div>
              </button>
            </div>
          )}

          {/* Sidebar */}
          <div className={`
            w-80 bg-white border-r border-gray-200 flex flex-col
            md:relative md:translate-x-0 md:w-80
            ${!selectedConversation ? 'relative translate-x-0' : ''}
            ${selectedConversation && isSidebarOpen ? 'fixed inset-y-0 left-0 z-10 translate-x-0' : ''}
            ${selectedConversation && !isSidebarOpen ? 'fixed inset-y-0 left-0 z-10 -translate-x-full md:translate-x-0' : ''}
            transition-transform duration-300 ease-in-out
            sm:w-72 lg:w-80
          `}>
            {/* Mobile overlay */}
            {selectedConversation && isSidebarOpen && (
              <div 
                className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-0"
                onClick={() => setIsSidebarOpen(false)}
              ></div>
            )}

            {/* Search */}
            <div className="p-3 sm:p-4 border-b border-gray-100 pt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto">
              {mockConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => handleConversationSelect(conversation.id)}
                  className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-50 ${
                    selectedConversation === conversation.id ? "bg-[#FFFCEB]" : ""
                  }`}
                >
                  <div className="relative flex-shrink-0">
                    <Image
                      src={conversation.avatar}
                      alt={conversation.name}
                      width={40}
                      height={40}
                      className="sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900 truncate text-xs sm:text-sm">{conversation.name}</h3>
                      <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{conversation.timestamp}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 truncate mt-1">{conversation.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Chat Area */}
          <div className={`flex-1 flex flex-col bg-gray-50 ${!selectedConversation ? 'hidden md:flex' : ''}`}>
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <div className="bg-white border-b border-gray-200 p-3 sm:p-4 flex items-center gap-3">
                  {/* Mobile back button */}
                  <button
                    onClick={() => setSelectedConversation("")}
                    className="md:hidden p-1 mr-2 text-gray-600 hover:text-gray-800"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900 text-sm sm:text-base">{selectedConv!.name}</h2>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-4 sm:space-y-6">
                  {mockMessages.map((message) => (
                    <div key={message.id} className={`flex gap-2 sm:gap-3 ${message.isOwn ? "justify-end" : "justify-start"}`}>
                      {!message.isOwn && (
                        <div className="flex-shrink-0">
                          <Image
                            src={message.avatar || "/placeholder.svg"}
                            alt="Avatar"
                            width={24}
                            height={24}
                            className="sm:w-8 sm:h-8 rounded-full object-cover"
                          />
                        </div>
                      )}
                      <div className={`max-w-[85%] sm:max-w-md ${message.isOwn ? "order-1" : ""}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-gray-500">{message.timestamp}</span>
                        </div>
                        {message.isImage ? (
                          <div className="bg-white rounded-lg p-2 shadow-sm">
                            <Image
                              src={message.imageSrc || "/placeholder.svg"}
                              alt="Shared image"
                              width={160}
                              height={120}
                              className="sm:w-[200px] sm:h-[150px] rounded-lg object-cover"
                            />
                          </div>
                        ) : (
                          <div
                            className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg ${
                              message.isOwn
                                ? "bg-gray-300 text-gray-900 ml-auto"
                                : "bg-[#FFFCEB] text-gray-900 shadow-sm"
                            }`}
                          >
                            <p className="text-xs sm:text-sm leading-relaxed">{message.content}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="bg-white border-t border-gray-200 p-3 sm:p-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
                      <Paperclip className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <button className="p-2 sm:p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors flex-shrink-0">
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* Empty State */
              <div className="flex-1 flex items-center justify-center p-4">
                <div className="text-center">
                  <Image src={Hand} height={100} width={400} alt="" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2 mt-5">Welcome to messages</h2>
                  <p className="text-gray-500 text-sm sm:text-base">Select a conversation to start chatting</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}