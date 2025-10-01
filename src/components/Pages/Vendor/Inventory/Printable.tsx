"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Document {
  id: string
  title: string
  preview: string
}

const documents: Document[] = [
  { id: "1", title: "Buyer's Guide", preview: "/pdf.pdf" },
  { id: "2", title: "Window Sticker", preview: "/pdf.pdf" },
  { id: "3", title: "Mirror Hanger", preview: "/pdf.pdf" },
  { id: "4", title: "Vehicle Ad", preview: "/pdf.pdf" },
]

const Printable = () => {
  const [selectedDocs, setSelectedDocs] = useState<Set<string>>(new Set())
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleDocument = (id: string) => {
    const newSelected = new Set(selectedDocs)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedDocs(newSelected)
  }

  const handleDownload = () => {
    if (selectedDocs.size === 0) {
      alert("Please select at least one document to download")
      return
    }

    selectedDocs.forEach((docId) => {
      const doc = documents.find((d) => d.id === docId)
      if (doc) {
        const link = document.createElement("a")
        link.href = doc.preview
        link.download = `${doc.title.replace(/\s+/g, "-").toLowerCase()}.pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    })
  }

  const handleCancel = () => {
    setSelectedDocs(new Set())
  }

  const getPdfSrc = (doc: Document) => {
    // For mobile, use Google Docs Viewer with properly encoded URL
    if (isMobile) {
      const fullUrl = `${window.location.origin}${doc.preview}`
      const encodedUrl = encodeURIComponent(fullUrl)
      return `https://docs.google.com/gview?url=${encodedUrl}&embedded=true`
    }

    // For desktop, return direct PDF source with parameters to hide toolbar
    return `${doc.preview}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mx-2 md:mx-5 my-3 md:my-6">
      <h1 className="text-lg md:text-xl font-medium mb-6 md:mb-8">
        Select Vehicle(s) & Documents to Download.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {documents.map((doc) => (
          <div key={doc.id} className="flex flex-col border rounded md:h-80 overflow-hidden">
            <button
              onClick={() => toggleDocument(doc.id)}
              className="relative bg-gray-50 overflow-hidden hover:border-gray-300 transition-colors group aspect-[3/4] w-full"
            >
              <div className="absolute inset-0 overflow-hidden flex items-center justify-center bg-gray-100">
                <iframe
                  src={getPdfSrc(doc)}
                  className="pointer-events-none w-full h-full"
                  style={{
                    border: "none",
                    transform: "scale(1.1)",
                    transformOrigin: "center center",
                  }}
                  title={doc.title}
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {selectedDocs.has(doc.id) && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-white flex items-center justify-center">
                    <Check
                      className="w-9 md:w-12 h-9 md:h-12 text-gray-800"
                      strokeWidth={3}
                    />
                  </div>
                </div>
              )}
            </button>
            <p className="bg-[#E8E8E8] w-full py-3 md:py-4 flex items-center justify-center text-center text-sm md:text-base font-medium text-gray-900 px-2">
              {doc.title}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <Button
          variant="outline"
          onClick={handleCancel}
          className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-2.5 text-sm sm:text-base font-medium border-gray-300 hover:bg-gray-50 bg-transparent"
        >
          Cancel
        </Button>
        <Button
          onClick={handleDownload}
          disabled={selectedDocs.size === 0}
          className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-black hover:opacity-90 disabled:opacity-50"
          style={{ backgroundColor: "#FFE135" }}
        >
          Download
        </Button>
      </div>
    </div>
  )
}

export default Printable