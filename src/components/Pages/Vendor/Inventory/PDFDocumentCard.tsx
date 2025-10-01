"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

interface PDFDocumentCardProps {
  title: string
  pdfPath: string
}

export function PDFDocumentCard({ title, pdfPath }: PDFDocumentCardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    console.log("[v0] PDF loaded successfully:", pdfPath)
    setIsLoading(false)
    setHasError(false)
  }

  const handleError = () => {
    console.log("[v0] PDF failed to load:", pdfPath)
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[3/4] bg-gray-100 relative flex items-center justify-center">
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-gray-50">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        )}
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10 bg-gray-50">
            <svg className="w-12 h-12 text-red-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-sm font-medium text-red-600">PDF not found or empty</p>
            <p className="text-xs text-gray-500 mt-1">Place your PDF file at:</p>
            <p className="text-xs font-mono text-gray-600 mt-1 break-all">public{pdfPath}</p>
          </div>
        )}
        <iframe
          src={pdfPath}
          className="w-full h-full border-0"
          title={title}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
      <div className="p-3 text-center bg-white">
        <p className="text-sm font-medium text-gray-900">{title}</p>
      </div>
    </Card>
  )
}
