"use client";
import React, { useState } from 'react'
import { Search, Wrench, ClipboardList, ShieldCheck } from 'lucide-react'
import Link from 'next/link';

interface FeatureCard {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  gradient: string
  hoverGradient: string
}

const features: FeatureCard[] = [
  {
    icon: Search,
    title: 'Smart Search',
    description: 'Make your real time search effective with intelligent filters and personalized results.',
    gradient: 'from-red-500 to-red-600',
    hoverGradient: 'from-red-400 to-red-500'
  },
  {
    icon: Wrench,
    title: 'Inspection Resources',
    description: 'Get instant access to comprehensive inspection checklists and trusted resources.',
    gradient: 'from-green-500 to-green-600',
    hoverGradient: 'from-green-400 to-green-500'
  },
  {
    icon: ClipboardList,
    title: 'Admin Insight',
    description: 'Simplify your back-end operations with real-time data and smart insights.',
    gradient: 'from-purple-500 to-purple-600',
    hoverGradient: 'from-purple-400 to-purple-500'
  },
  {
    icon: ShieldCheck,
    title: 'Avoid Costly Mistakes',
    description: 'Learn how to find and avoid common costly mistakes while buying or selling a vehicle.',
    gradient: 'from-orange-500 to-orange-600',
    hoverGradient: 'from-orange-400 to-orange-500'
  }
]

const WhyAutowurx: React.FC = () => {
  const [isButtonPressed] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)


  return (
    <>


      <div className=" bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center py-10">
        <div className="xl:container w-full text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-16 text-white">
            Why <span className="text-yellow-400 font-normal">Autowurx</span>?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gp-1 md:gap-3 lg:gap-0 xl:gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const isHovered = hoveredIndex === index
              return (
                <div
                  key={index}
                  className={`
                    relative overflow-hidden rounded-2xl p-8 
                    transition-all duration-300 ease-out
                    hover:transform hover:-translate-y-3 hover:bg-white/10
                    hover:border-yellow-400/30 hover:shadow-2xl
                    cursor-pointer
                  `}
                  style={{
                    animation: `float 6s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`
                    absolute top-0 left-0 right-0 h-1 
                    bg-gradient-to-r from-red-500 via-yellow-400 to-teal-500
                    transition-opacity duration-300
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                  `} />

                  <div className={`
                    w-12 h-12 mx-auto mb-4 rounded-lg
                    bg-gradient-to-br ${isHovered ? feature.hoverGradient : feature.gradient}
                    flex items-center justify-center
                    transition-all duration-300 ease-out
                    ${isHovered ? 'scale-110' : 'scale-100'}
                  `}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

          <Link href='/more-autowurx'><button
            // onClick={handleSignUp}
            className={`
              bg-gradient-to-r from-yellow-400 to-yellow-500
              hover:from-yellow-500 hover:to-yellow-400
              text-gray-900 font-semibold text-lg
              px-10 py-4 rounded-full
              transition-all duration-300 ease-out
              hover:transform hover:-translate-y-1
              hover:shadow-lg hover:shadow-yellow-400/30
              active:scale-95
              uppercase tracking-wider
              ${isButtonPressed ? 'scale-95' : 'scale-100'}
            `}
          >
            More
          </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default WhyAutowurx
