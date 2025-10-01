"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import dynamic from "next/dynamic"
import { div } from "framer-motion/client"

// Dynamically import react-pdf components with no SSR
const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  { ssr: false }
)

const Page = dynamic(
  () => import("react-pdf").then((mod) => mod.Page),
  { ssr: false }
)

const paperworkItems = [
  { id: 1, label: "Buyer's Guide" },
  { id: 2, label: "Window Sticker" },
  { id: 3, label: "Mirror Hanger" },
  { id: 4, label: "Vehicle Ad" },
  { id: 5, label: "Bill Of Sale" },
  { id: 6, label: "Application For Certif ..." },
  { id: 7, label: "Notice Of Exclusive O ..." },
  { id: 8, label: "Verification Of Resid ..." },
]

export function VehiclePaperworkSection() {
  const [selectedPdf, setSelectedPdf] = useState<number | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Configure PDF.js worker only on client side
    import("react-pdf").then((pdfjs) => {
      pdfjs.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.pdfjs.version}/legacy/build/pdf.worker.min.mjs`
    })
    setIsClient(true)
  }, [])

  return (
    <div className="w-full border border-[#E8E8E8] p-5 rounded-lg">
      <h2 className="text-xl font-bold mb-6">Select Vehicle(s) paperwork</h2>

      <div className="grid  md:grid-cols-2 gap-2 sm:gap-2">
        {paperworkItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col mb-2 items-center cursor-pointer group"
            onClick={() => setSelectedPdf(item.id)}
          >
            <Card className="w-full aspect-[3/4] overflow-hidden  rounded-md  transition-colors bg-white">
              <div className="w-full h-full flex items-center justify-center  ">
                {isClient ? (
                 <div className="border border-[#E8E8E8] rounded-lg">
                   <Document
                    file="/pdf.pdf"
                    className={`p-2`}
                    loading={
                      <div className="flex items-center  justify-center h-full">
                        <div className="animate-spin  h-8 w-8 " />
                      </div>
                    }
                    error={
                      <div className="flex items-center justify-center h-full text-xs text-gray-400">
                        <div className="text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <p className="mt-2">PDF Preview</p>
                        </div>
                      </div>
                    }
                  >
                    <Page pageNumber={1} width={200} renderTextLayer={false} renderAnnotationLayer={false} />
                     
                  </Document>
                  <p className="mt-3 text-sm py-3 px-auto  border-t border-[#E8E8E8] font-medium text-center bg-[#F4F4F4]  text-gray-700">{item.label}</p>
                 </div>
                  
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
                  </div>
                )}
                
              </div>
             
            </Card>
            
          </div>
        ))}
      </div>
    </div>
  )
}