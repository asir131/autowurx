"use client"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const FAQAccordion = () => {
  const [activeItem, setActiveItem] = useState<number | null>(0) // First item open by default

  const faqData = [
    {
      question: "How do I create an account on Autowurx.com?",
      answer:
        "To create an account, click on the 'Sign Up' button on the top right corner of the homepage. Fill in the required information, including your email address and a secure password. Once registered, you can log in and start exploring our platform.",
    },
    {
      question: "How can I list my vehicle for sale?",
      answer:
        "After logging into your account, click on the 'Sell Your Car' or 'List Vehicle' button. You'll be guided through a step-by-step process to add photos, vehicle details, pricing, and contact information. Make sure to provide accurate information to attract serious buyers.",
    },
    {
      question: "What tips do you have for creating an effective vehicle listing?",
      answer:
        "Use high-quality photos from multiple angles, write a detailed description highlighting key features, set a competitive price based on market research, be honest about the vehicle's condition, respond promptly to inquiries, and keep your listing updated.",
    },
    {
      question: "How can I search for vehicles on Autowurx.com?",
      answer:
        "Use our advanced search filters on the homepage to narrow down results by make, model, year, price range, mileage, location, and other criteria. You can also browse by category or use the quick search bar for specific vehicles.",
    },
    {
      question: "How do I contact a seller or buyer?",
      answer:
        "Click on any vehicle listing to view contact options. You can send a message through our platform, call the provided phone number, or use the 'Contact Seller' form. All communications are facilitated through secure channels to protect your privacy.",
    },
    {
      question: "Can I negotiate the price of a vehicle?",
      answer:
        "Yes, most sellers are open to reasonable negotiations. Use the messaging system to discuss pricing, or contact them directly. Be respectful and make fair offers based on the vehicle's condition and market value.",
    },
    {
      question: "How do I edit or remove my vehicle listing?",
      answer:
        "Log into your account and go to 'My Listings' or 'Dashboard'. Find the listing you want to modify and click 'Edit' to update information or 'Delete' to remove it. Changes are typically reflected on the site within a few minutes.",
    },
    {
      question: "What payment methods are accepted on Autowurx.com?",
      answer:
        "We accept various secure payment methods including credit/debit cards, bank transfers, and certified checks. For premium listing features, we support PayPal and major credit cards. Always verify payment methods with individual sellers for vehicle purchases.",
    },
  ]

  const toggleItem = (index: number) => {
    setActiveItem((prev) => (prev === index ? null : index))
  }

  return (
    <div className="">
      <div className=" rounded-lg shadow-sm">
        <div className="py-6  ">
          <h1 className="text-2xl font-bold text-gray-900">Frequently asked questions?</h1>
        </div>

        <div className="divide-y divide-gray-200">
          {faqData.map((item, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleItem(index)}
                className={`w-full px-6 py-4 text-left flex items-center justify-between  transition-all duration-300 ease-in-out transform  ${
                  activeItem === index ? "bg-[#FFE135] " : ""
                }`}
              >
                <span className="font-medium text-gray-900 pr-4 text-md">{item.question}</span>
                <div className="flex-shrink-0">
                  <div
                    className={`transform transition-all duration-300 ease-in-out ${
                      activeItem === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    {activeItem === index ? (
                      <Minus className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
                  activeItem === index ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
                }`}
              >
                <div
                  className={`px-6 pb-4 text-gray-700 text-base leading-relaxed transition-all duration-300 delay-100 py-3 ${
                    activeItem === index ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-1"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQAccordion
