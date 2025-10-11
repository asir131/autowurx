"use client"
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"

const Payment: React.FC = () => {
  const searchParams = useSearchParams()
  const [packageTitle, setPackageTitle] = useState('')
  const [packagePrice, setPackagePrice] = useState('')
  const [email, setEmail] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [saveInfo, setSaveInfo] = useState(false)
  const [promoCode, setPromoCode] = useState('')
  const [showPromoInput, setShowPromoInput] = useState(false)

  useEffect(() => {
    const title = searchParams.get('title') || ''
    const price = searchParams.get('price') || ''
    setPackageTitle(title)
    setPackagePrice(price)
  }, [searchParams])

  const getPackageDescription = (title: string) => {
    const descriptions: Record<string, string> = {
      'Private Auctions': 'Access to private seller listings, ability to place offers, and communicate with the sellers in real-time. Billed monthly',
      'VIN Check': 'Comprehensive vehicle history reports, market pricing data, and similar vehicle search. Billed monthly',
      'Lead Generation': 'Get more offers, increase calls, and drive traffic to your dealership. Billed monthly',
      'Private Marketplace': 'Save hours of sourcing, tap into hidden inventory, restock smarter. Billed monthly',
      'Ads': 'Unlimited vehicle advertisements with market pricing and trends data. Billed monthly'
    }
    return descriptions[title] || 'Access to premium features. Billed monthly'
  }

  const numericPrice = packagePrice.replace('$', '')

  return (
    <div>
      <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-10 pb-10">
        <div className="grid mb-8">
          <div
            className="flex items-center gap-2 text-lg sm:text-xl md:text-[28px] font-semibold cursor-pointer"
            onClick={() => window.history.back()}
          >
            <MdOutlineKeyboardArrowLeft size={35} />
            <span className="break-words">Payment</span>
          </div>
        </div>

        <div className='bg-white p-3 rounded-lg border mb-6'>
          {/* Support Info Card */}
          <div className="bg-white rounded-lg border shadow-sm p-4 sm:p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              
              {/* Contact Us Section */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.1667 14.7415H34.8333C36.8584 14.7415 38.5 16.3832 38.5 18.4082V29.4082C38.5 31.4332 36.8584 33.0749 34.8333 33.0749H31.1667V40.4082L23.8333 33.0749H16.5C15.4875 33.0749 14.5708 32.6645 13.9073 32.0009M13.9073 32.0009L20.1667 25.7415H27.5C29.525 25.7415 31.1667 24.0999 31.1667 22.0749V11.0749C31.1667 9.04983 29.525 7.4082 27.5 7.4082H9.16667C7.14162 7.4082 5.5 9.04983 5.5 11.0749V22.0749C5.5 24.0999 7.14162 25.7415 9.16667 25.7415H12.8333V33.0749L13.9073 32.0009Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
                  <p className="text-gray-600 text-sm mb-1">1-866-388-9778</p>
                  <p className="text-gray-600 text-sm">support@autowurx.com</p>
                </div>
              </div>

              {/* Support Hours Section */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 14.7409V22.0742L27.5 27.5742M38.5 22.0742C38.5 31.1869 31.1127 38.5742 22 38.5742C12.8873 38.5742 5.5 31.1869 5.5 22.0742C5.5 12.9615 12.8873 5.57422 22 5.57422C31.1127 5.57422 38.5 12.9615 38.5 22.0742Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Hours</h3>
                  <p className="text-gray-600 text-sm mb-1">Monday-Friday 8:30 - 5:30 CST</p>
                  <p className="text-gray-600 text-sm">Saturday 9:00 - 3:00 CST</p>
                </div>
              </div>

              {/* Support Status Section */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.3867 10.5911C30.9768 9.16705 29.2999 8.03509 27.452 7.26002C25.6041 6.48495 23.6214 6.08199 21.6175 6.07422H21.5011C17.4376 6.07422 13.5406 7.68844 10.6672 10.5618C7.79391 13.4351 6.17969 17.3322 6.17969 21.3956V29.6456C6.17969 30.5834 6.5522 31.4827 7.21527 32.1458C7.87835 32.8089 8.77767 33.1814 9.7154 33.1814H12.0725C13.0103 33.1814 13.9096 32.8089 14.5727 32.1458C15.2357 31.4827 15.6083 30.5834 15.6083 29.6456V23.7528C15.6083 22.8151 15.2357 21.9157 14.5727 21.2527C13.9096 20.5896 13.0103 20.2171 12.0725 20.2171H8.58987C8.81716 17.7597 9.7402 15.4179 11.2508 13.4664C12.7614 11.5148 14.797 10.0343 17.119 9.19827C19.441 8.36227 21.9532 8.20545 24.3612 8.7462C26.7691 9.28695 28.973 10.5029 30.7146 12.2514C32.8432 14.391 34.1526 17.2103 34.4138 20.2171H30.9297C29.992 20.2171 29.0926 20.5896 28.4296 21.2527C27.7665 21.9157 27.394 22.8151 27.394 23.7528V29.6456C27.394 30.5834 27.7665 31.4827 28.4296 32.1458C29.0926 32.8089 29.992 33.1814 30.9297 33.1814H34.4654C34.4654 34.1191 34.0929 35.0184 33.4298 35.6815C32.7667 36.3446 31.8674 36.7171 30.9297 36.7171H22.6797C22.3671 36.7171 22.0673 36.8412 21.8463 37.0623C21.6253 37.2833 21.5011 37.5831 21.5011 37.8956C21.5011 38.2082 21.6253 38.508 21.8463 38.729C22.0673 38.9501 22.3671 39.0742 22.6797 39.0742H30.9297C32.4926 39.0742 33.9914 38.4534 35.0966 37.3482C36.2017 36.2431 36.8225 34.7442 36.8225 33.1814V21.3956C36.8302 19.3914 36.4424 17.4054 35.6812 15.5514C34.92 13.6973 33.8004 12.0117 32.3867 10.5911ZM12.0725 22.5742C12.3851 22.5742 12.6849 22.6984 12.9059 22.9194C13.1269 23.1404 13.2511 23.4402 13.2511 23.7528V29.6456C13.2511 29.9582 13.1269 30.258 12.9059 30.479C12.6849 30.7001 12.3851 30.8242 12.0725 30.8242H9.7154C9.40283 30.8242 9.10305 30.7001 8.88203 30.479C8.661 30.258 8.53683 29.9582 8.53683 29.6456V22.5742H12.0725ZM30.9297 30.8242C30.6171 30.8242 30.3173 30.7001 30.0963 30.479C29.8753 30.258 29.7511 29.9582 29.7511 29.6456V23.7528C29.7511 23.4402 29.8753 23.1404 30.0963 22.9194C30.3173 22.6984 30.6171 22.5742 30.9297 22.5742H34.4654V30.8242H30.9297Z" fill="#606060"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Support is: In the Office</h3>
                  <p className="text-gray-600 text-sm">Assisted Support</p>
                </div>
              </div>
            </div>
          </div>
          {/* Payment Info Section */}
        <div className='rounded-lg border mt-8'>
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Payment Info</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Left Column - Subscription Details */}
            <div className="space-y-6 md:border-r pr-2">
              <div>
                <h3 className="text-lg font-medium mb-2">Subscribe to {packageTitle}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold">{packagePrice}</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>

              <div className="border-b  p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{packageTitle}</h4>
                  <span className="font-semibold">{packagePrice}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {getPackageDescription(packageTitle)}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-semibold">${numericPrice}.00</span>
                </div>

                {!showPromoInput ? (
                  <button
                    onClick={() => setShowPromoInput(true)}
                    className="text-sm text-gray-600 hover:text-gray-900 border border-[#FFE135] bg-[#FFFCEB] py-2 px-4 rounded-lg"
                  >
                    Add promotion code
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                      Apply
                    </button>
                  </div>
                )}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total due today</span>
                  <span className="text-lg font-bold">{packagePrice}</span>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Form */}
            <div className="space-y-6">
              <button 
                className="w-full py-3 rounded-lg font-semibold  transition-colors"
                style={{ backgroundColor: '#00D66F' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#00C263'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00D66F'}
              >
                Pay With Stripe
              </button>

              <div className="flex items-center gap-4">
                <div className="flex-1 border-t"></div>
                <span className="text-sm text-gray-500">Or</span>
                <div className="flex-1 border-t"></div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="icargo@Gmail.Com"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Payment method</label>
                <div className="space-y-3">
                  {/* Card Option */}
                  <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:border-gray-400">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 4.57422H3C2.60218 4.57422 2.22064 4.73225 1.93934 5.01356C1.65804 5.29486 1.5 5.67639 1.5 6.07422V18.0742C1.5 18.472 1.65804 18.8536 1.93934 19.1349C2.22064 19.4162 2.60218 19.5742 3 19.5742H21C21.3978 19.5742 21.7794 19.4162 22.0607 19.1349C22.342 18.8536 22.5 18.472 22.5 18.0742V6.07422C22.5 5.67639 22.342 5.29486 22.0607 5.01356C21.7794 4.73225 21.3978 4.57422 21 4.57422ZM21 6.07422V8.32422H3V6.07422H21ZM21 18.0742H3V9.82422H21V18.0742ZM19.5 15.8242C19.5 16.0231 19.421 16.2139 19.2803 16.3545C19.1397 16.4952 18.9489 16.5742 18.75 16.5742H15.75C15.5511 16.5742 15.3603 16.4952 15.2197 16.3545C15.079 16.2139 15 16.0231 15 15.8242C15 15.6253 15.079 15.4345 15.2197 15.2939C15.3603 15.1532 15.5511 15.0742 15.75 15.0742H18.75C18.9489 15.0742 19.1397 15.1532 19.2803 15.2939C19.421 15.4345 19.5 15.6253 19.5 15.8242ZM13.5 15.8242C13.5 16.0231 13.421 16.2139 13.2803 16.3545C13.1397 16.4952 12.9489 16.5742 12.75 16.5742H11.25C11.0511 16.5742 10.8603 16.4952 10.7197 16.3545C10.579 16.2139 10.5 16.0231 10.5 15.8242C10.5 15.6253 10.579 15.4345 10.7197 15.2939C10.8603 15.1532 11.0511 15.0742 11.25 15.0742H12.75C12.9489 15.0742 13.1397 15.1532 13.2803 15.2939C13.421 15.4345 13.5 15.6253 13.5 15.8242Z" fill="black"/>
                      </svg>
                      <span>Card</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.574219" width="31" height="23" rx="3.5" stroke="#BDBDBD"/>
                        <path d="M8.14286 5.07422C6.96786 5.07422 6 6.09047 6 7.32422V17.8242C6 19.058 6.96786 20.0742 8.14286 20.0742H23.8571C25.0321 20.0742 26 19.058 26 17.8242V7.32422C26 6.09047 25.0321 5.07422 23.8571 5.07422H8.14286ZM8.14286 6.57422H23.8571C24.2607 6.57422 24.5714 6.90047 24.5714 7.32422V17.8242C24.5714 18.248 24.2607 18.5742 23.8571 18.5742H8.14286C7.73929 18.5742 7.42857 18.248 7.42857 17.8242V7.32422C7.42857 6.90047 7.73929 6.57422 8.14286 6.57422ZM18.4329 9.85547C17.0571 9.85547 16.335 10.568 16.335 11.4725C16.335 13.1097 18.1636 12.8825 18.1636 13.7225C18.1636 13.8672 18.0493 14.1927 17.2921 14.1927C16.535 14.1927 16.0421 13.9115 16.0421 13.9115L15.8207 14.9915C15.8207 14.9915 16.2886 15.2952 17.2279 15.2952C18.1636 15.2952 19.4807 14.5392 19.4807 13.4427C19.4807 12.1257 17.65 12.0387 17.65 11.4515C17.65 11.1515 17.8929 10.9115 18.5429 10.9115C18.9671 10.9115 19.4357 11.264 19.4357 11.264L19.66 10.1165C19.66 10.1165 19.0386 9.85772 18.4314 9.85772L18.4329 9.85547ZM12.5629 9.94922L11.3571 13.6527C11.3571 13.6527 11.2971 13.3317 11.2679 13.1367C10.5857 11.5317 9.48214 10.9332 9.48214 10.9332L10.5321 15.1287H11.9607L13.9679 9.94922H12.5643H12.5629ZM14.4821 9.94922L13.7007 15.1287H15.0193L15.8 9.94922H14.4821ZM21.5807 9.94922L19.4379 15.1287H20.7321L21 14.4027H22.6521L22.7857 15.1287H23.9686L22.9643 9.94922H21.5807ZM8.03071 9.97172C8.03071 9.97172 10.6 10.8005 11.2007 12.8322L10.7557 10.4885C10.7557 10.4885 10.5593 9.97097 10.0414 9.97097H8.03143L8.03071 9.97172ZM22.0714 11.4492L22.45 13.3947H21.3786L22.0714 11.4492Z" fill="black"/>
                      </svg>
                      <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.0742188" width="31" height="24" rx="4" fill="#BDBDBD"/>
                        <g clipPath="url(#clip0_11181_85486)">
                          <path d="M9.35988 20.0004V19.0076C9.35988 18.627 9.12818 18.3788 8.73101 18.3788C8.53247 18.3788 8.31735 18.445 8.1684 18.6601C8.05262 18.4781 7.88717 18.3788 7.63895 18.3788C7.47343 18.3788 7.30805 18.4284 7.17561 18.6105V18.4119H6.82812V20.0004H7.17561V19.1234C7.17561 18.8422 7.32456 18.7097 7.55627 18.7097C7.78782 18.7097 7.90375 18.8587 7.90375 19.1234V20.0004H8.25124V19.1234C8.25124 18.8422 8.41662 18.7097 8.63174 18.7097C8.86345 18.7097 8.97923 18.8587 8.97923 19.1234V20.0004H9.35988ZM14.5059 18.4119H13.9434V17.9321H13.5959V18.4119H13.2815V18.7262H13.5958V19.4544C13.5958 19.8185 13.7448 20.0335 14.1419 20.0335C14.2909 20.0335 14.4563 19.9839 14.5722 19.9177L14.4728 19.6198C14.3736 19.686 14.2578 19.7026 14.175 19.7026C14.0096 19.7026 13.9434 19.6033 13.9434 19.4378V18.7262H14.5059V18.4119ZM17.4514 18.3788C17.2528 18.3788 17.1205 18.4781 17.0377 18.6105V18.4119H16.6902V20.0004H17.0377V19.1069C17.0377 18.8422 17.1535 18.6932 17.3686 18.6932C17.4348 18.6932 17.5175 18.7098 17.5837 18.7263L17.683 18.3954C17.6168 18.3788 17.5175 18.3788 17.4514 18.3788M13.0002 18.5444C12.8347 18.4285 12.6031 18.3789 12.3548 18.3789C11.9577 18.3789 11.693 18.5774 11.693 18.8918C11.693 19.1566 11.8916 19.3055 12.2391 19.3552L12.4045 19.3718C12.5865 19.4048 12.6858 19.4545 12.6858 19.5372C12.6858 19.653 12.5535 19.7358 12.3217 19.7358C12.09 19.7358 11.9081 19.653 11.7922 19.5703L11.6268 19.835C11.8088 19.9674 12.057 20.0336 12.3052 20.0336C12.7685 20.0336 13.0333 19.8185 13.0333 19.5206C13.0333 19.2393 12.8182 19.0904 12.4872 19.0408L12.3217 19.0242C12.1728 19.0076 12.057 18.9746 12.057 18.8753C12.057 18.7595 12.1728 18.6933 12.3548 18.6933C12.5535 18.6933 12.752 18.776 12.8513 18.8257L13.0002 18.5444ZM22.2335 18.3789C22.0349 18.3789 21.9025 18.4782 21.8198 18.6105V18.412H21.4723V20.0005H21.8198V19.107C21.8198 18.8422 21.9356 18.6933 22.1507 18.6933C22.2169 18.6933 22.2997 18.7099 22.3659 18.7264L22.4651 18.3955C22.399 18.3789 22.2997 18.3789 22.2335 18.3789ZM17.7989 19.2062C17.7989 19.6861 18.1298 20.0336 18.6428 20.0336C18.8744 20.0336 19.0399 19.984 19.2053 19.8516L19.0399 19.5703C18.9075 19.6696 18.7751 19.7192 18.6262 19.7192C18.3449 19.7192 18.1463 19.5206 18.1463 19.2062C18.1463 18.9084 18.3449 18.7098 18.6262 18.6933C18.7751 18.6933 18.9075 18.7429 19.0399 18.8422L19.2053 18.5609C19.0399 18.4285 18.8744 18.3789 18.6428 18.3789C18.1298 18.3789 17.7989 18.7264 17.7989 19.2062ZM21.009 19.2062V18.412H20.6615V18.6105C20.5457 18.4617 20.3802 18.3789 20.1651 18.3789C19.7183 18.3789 19.3708 18.7264 19.3708 19.2062C19.3708 19.6861 19.7183 20.0336 20.1651 20.0336C20.3967 20.0336 20.5622 19.9509 20.6615 19.8019V20.0005H21.009V19.2062ZM19.7348 19.2062C19.7348 18.9249 19.9169 18.6933 20.2147 18.6933C20.496 18.6933 20.6946 18.9084 20.6946 19.2062C20.6946 19.4876 20.496 19.7192 20.2147 19.7192C19.9169 19.7026 19.7348 19.4876 19.7348 19.2062ZM15.5816 18.3789C15.1182 18.3789 14.7872 18.7098 14.7872 19.2062C14.7872 19.7027 15.1182 20.0336 15.5981 20.0336C15.8297 20.0336 16.0614 19.9674 16.2435 19.8185L16.0779 19.5703C15.9456 19.6696 15.7801 19.7358 15.6147 19.7358C15.3995 19.7358 15.1844 19.6365 15.1347 19.3551H16.3096V19.2228C16.3262 18.7098 16.0284 18.3789 15.5816 18.3789ZM15.5815 18.6767C15.7965 18.6767 15.9456 18.8092 15.9786 19.0574H15.1512C15.1843 18.8422 15.3333 18.6767 15.5815 18.6767ZM24.2025 19.2062V17.7832H23.855V18.6105C23.7392 18.4617 23.5737 18.3789 23.3586 18.3789C22.9118 18.3789 22.5643 18.7264 22.5643 19.2062C22.5643 19.6861 22.9118 20.0336 23.3586 20.0336C23.5903 20.0336 23.7557 19.9509 23.855 19.8019V20.0005H24.2025V19.2062ZM22.9284 19.2062C22.9284 18.9249 23.1104 18.6933 23.4083 18.6933C23.6896 18.6933 23.8881 18.9084 23.8881 19.2062C23.8881 19.4876 23.6896 19.7192 23.4083 19.7192C23.1104 19.7026 22.9284 19.4876 22.9284 19.2062ZM11.3123 19.2062V18.412H10.9648V18.6105C10.849 18.4617 10.6835 18.3789 10.4684 18.3789C10.0216 18.3789 9.67413 18.7264 9.67413 19.2062C9.67413 19.6861 10.0216 20.0336 10.4684 20.0336C10.7001 20.0336 10.8655 19.9509 10.9648 19.8019V20.0005H11.3123V19.2062ZM10.0216 19.2062C10.0216 18.9249 10.2037 18.6933 10.5015 18.6933C10.7828 18.6933 10.9814 18.9084 10.9814 19.2062C10.9814 19.4876 10.7828 19.7192 10.5015 19.7192C10.2037 19.7026 10.0216 19.4876 10.0216 19.2062Z" fill="black"/>
                          <path d="M12.8828 6.34766H18.0951V15.7133H12.8828V6.34766Z" fill="#FF5F00"/>
                          <path d="M13.2151 11.0312C13.2151 9.12829 14.1086 7.44045 15.4819 6.34831C14.4726 5.55407 13.1985 5.07422 11.8086 5.07422C8.51561 5.07422 5.85156 7.73826 5.85156 11.0312C5.85156 14.3241 8.51561 16.9881 11.8085 16.9881C13.1985 16.9881 14.4726 16.5083 15.4819 15.714C14.1086 14.6384 13.2151 12.9341 13.2151 11.0312Z" fill="#EB001B"/>
                          <path d="M25.1304 11.0312C25.1304 14.324 22.4663 16.9881 19.1734 16.9881C17.7835 16.9881 16.5094 16.5083 15.5 15.714C16.8899 14.6219 17.767 12.9341 17.767 11.0312C17.767 9.12829 16.8734 7.44045 15.5 6.34831C16.5093 5.55407 17.7835 5.07422 19.1734 5.07422C22.4663 5.07422 25.1304 7.75485 25.1304 11.0312Z" fill="#F79E1B"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_11181_85486">
                            <rect width="19.2965" height="15" fill="white" transform="translate(5.85156 5.07422)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </label>

                  {/* Cash App Pay Option */}
                  <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-gray-400">
                    <input
                      type="radio"
                      name="payment"
                      value="cashapp"
                      checked={paymentMethod === 'cashapp'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.32422C10.0716 2.32422 8.18657 2.89605 6.58319 3.96739C4.97982 5.03873 3.73013 6.56148 2.99218 8.34305C2.25422 10.1246 2.06114 12.085 2.43735 13.9763C2.81355 15.8677 3.74215 17.6049 5.10571 18.9685C6.46928 20.3321 8.20656 21.2607 10.0979 21.6369C11.9892 22.0131 13.9496 21.82 15.7312 21.082C17.5127 20.3441 19.0355 19.0944 20.1068 17.491C21.1782 15.8876 21.75 14.0026 21.75 12.0742C21.7473 9.4892 20.7192 7.01083 18.8913 5.18294C17.0634 3.35505 14.585 2.32695 12 2.32422ZM12 20.3242C10.3683 20.3242 8.77326 19.8404 7.41655 18.9338C6.05984 18.0273 5.00242 16.7388 4.378 15.2314C3.75358 13.7239 3.5902 12.0651 3.90853 10.4647C4.22685 8.86438 5.01259 7.39437 6.16637 6.24059C7.32016 5.0868 8.79017 4.30107 10.3905 3.98274C11.9909 3.66441 13.6497 3.82779 15.1571 4.45221C16.6646 5.07664 17.9531 6.13406 18.8596 7.49076C19.7661 8.84747 20.25 10.4425 20.25 12.0742C20.2475 14.2615 19.3775 16.3585 17.8309 17.9051C16.2843 19.4517 14.1873 20.3217 12 20.3242ZM15.75 13.9492C15.75 14.6454 15.4734 15.3131 14.9812 15.8054C14.4889 16.2977 13.8212 16.5742 13.125 16.5742H12.75V17.3242C12.75 17.5231 12.671 17.7139 12.5303 17.8545C12.3897 17.9952 12.1989 18.0742 12 18.0742C11.8011 18.0742 11.6103 17.9952 11.4697 17.8545C11.329 17.7139 11.25 17.5231 11.25 17.3242V16.5742H9.75C9.55109 16.5742 9.36033 16.4952 9.21967 16.3545C9.07902 16.2139 9 16.0231 9 15.8242C9 15.6253 9.07902 15.4345 9.21967 15.2939C9.36033 15.1532 9.55109 15.0742 9.75 15.0742H13.125C13.4234 15.0742 13.7095 14.9557 13.9205 14.7447C14.1315 14.5337 14.25 14.2476 14.25 13.9492C14.25 13.6509 14.1315 13.3647 13.9205 13.1537C13.7095 12.9427 13.4234 12.8242 13.125 12.8242H10.875C10.1788 12.8242 9.51113 12.5477 9.01885 12.0554C8.52657 11.5631 8.25 10.8954 8.25 10.1992C8.25 9.50303 8.52657 8.83535 9.01885 8.34306C9.51113 7.85078 10.1788 7.57422 10.875 7.57422H11.25V6.82422C11.25 6.62531 11.329 6.43454 11.4697 6.29389C11.6103 6.15324 11.8011 6.07422 12 6.07422C12.1989 6.07422 12.3897 6.15324 12.5303 6.29389C12.671 6.43454 12.75 6.62531 12.75 6.82422V7.57422H14.25C14.4489 7.57422 14.6397 7.65324 14.7803 7.79389C14.921 7.93454 15 8.12531 15 8.32422C15 8.52313 14.921 8.7139 14.7803 8.85455C14.6397 8.9952 14.4489 9.07422 14.25 9.07422H10.875C10.5766 9.07422 10.2905 9.19275 10.0795 9.40372C9.86853 9.6147 9.75 9.90085 9.75 10.1992C9.75 10.4976 9.86853 10.7837 10.0795 10.9947C10.2905 11.2057 10.5766 11.3242 10.875 11.3242H13.125C13.8212 11.3242 14.4889 11.6008 14.9812 12.0931C15.4734 12.5853 15.75 13.253 15.75 13.9492Z" fill="black"/>
                    </svg>
                    <span>Cash App Pay</span>
                  </label>

                  {/* US Bank Account Option */}
                  <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-gray-400">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.25 9.82375H4.5V15.8238H3C2.80109 15.8238 2.61032 15.9028 2.46967 16.0434C2.32902 16.1841 2.25 16.3748 2.25 16.5738C2.25 16.7727 2.32902 16.9634 2.46967 17.1041C2.61032 17.2447 2.80109 17.3238 3 17.3238H21C21.1989 17.3238 21.3897 17.2447 21.5303 17.1041C21.671 16.9634 21.75 16.7727 21.75 16.5738C21.75 16.3748 21.671 16.1841 21.5303 16.0434C21.3897 15.9028 21.1989 15.8238 21 15.8238H19.5V9.82375H21.75C21.9132 9.82359 22.0719 9.77021 22.202 9.6717C22.3321 9.5732 22.4265 9.43495 22.4709 9.27793C22.5153 9.1209 22.5073 8.95368 22.4481 8.80161C22.3889 8.64955 22.2817 8.52095 22.1428 8.43532L12.3928 2.43531C12.2747 2.36268 12.1387 2.32422 12 2.32422C11.8613 2.32422 11.7253 2.36268 11.6072 2.43531L1.85719 8.43532C1.71828 8.52095 1.61108 8.64955 1.55187 8.80161C1.49266 8.95368 1.48466 9.1209 1.52908 9.27793C1.57351 9.43495 1.66793 9.5732 1.79803 9.6717C1.92814 9.77021 2.08681 9.82359 2.25 9.82375ZM6 9.82375H9V15.8238H6V9.82375ZM13.5 9.82375V15.8238H10.5V9.82375H13.5ZM18 15.8238H15V9.82375H18V15.8238ZM12 3.95406L19.1006 8.32375H4.89937L12 3.95406ZM23.25 19.5738C23.25 19.7727 23.171 19.9634 23.0303 20.1041C22.8897 20.2447 22.6989 20.3238 22.5 20.3238H1.5C1.30109 20.3238 1.11032 20.2447 0.96967 20.1041C0.829018 19.9634 0.75 19.7727 0.75 19.5738C0.75 19.3748 0.829018 19.1841 0.96967 19.0434C1.11032 18.9028 1.30109 18.8238 1.5 18.8238H22.5C22.6989 18.8238 22.8897 18.9028 23.0303 19.0434C23.171 19.1841 23.25 19.3748 23.25 19.5738Z" fill="black"/>
                    </svg>
                    <span>US bank account</span>
                  </label>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                  className="mt-1 w-4 h-4"
                />
                <div>
                  <p className="text-sm font-medium">Securely save my information for 1-click checkout</p>
                  <p className="text-xs text-gray-500 mt-1">Pay faster on Autowurx and everywhere Link is accepted.</p>
                </div>
              </label>

              <button 
                className="w-full py-3 rounded-lg font-semibold transition-colors"
                style={{ backgroundColor: '#FFE135' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFDB1A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFE135'}
              >
                Subscribe
              </button>

              <p className="text-xs text-center text-gray-500">
                By confirming your subscription, you allow Autowurx to charge you for future payments in accordance with their terms. You can always cancel your subscription.
              </p>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Powered by <span className="font-semibold">stripe</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>

        
      </div>
    </div>
  )
}

export default Payment