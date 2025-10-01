"use client"

import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import type React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ZoomIn, ZoomOut, RotateCw, Trash2, Upload, Search } from "lucide-react"

interface Photo {
  id: string
  url: string
  file: File
}

const EditInventory: React.FC = () => {
  const [selectedCondition, setSelectedCondition] = useState<string>("Used")
  const [selectedFabric, setSelectedFabric] = useState<string>("Cloth")
  const [mileage, setMileage] = useState<string>("180,004")
  const [displayEmailForMileage, setDisplayEmailForMileage] = useState<boolean>(false)
  const [productId, setProductId] = useState<string>("")
  const [showAdditionalInfo, setShowAdditionalInfo] = useState<boolean>(false)
  const [engineDescription, setEngineDescription] = useState<string>("I4 2.5L Natural Aspiration")
  const [transmissionDescription, setTransmissionDescription] = useState<string>("CVT")
  const [titleStatus, setTitleStatus] = useState<string>("")
  const [warranty, setWarranty] = useState<string>("")
  const [inspection, setInspection] = useState<string>("No")
  const [inspectionDate, setInspectionDate] = useState<string>("")
  const [inspectionNote, setInspectionNote] = useState<string>("")
  const [showAdditionalPricing, setShowAdditionalPricing] = useState<boolean>(false)
  const [price, setPrice] = useState<string>("180,004")
  const [displayEmailForPrice, setDisplayEmailForPrice] = useState<boolean>(false)
  const [specialPrice, setSpecialPrice] = useState<string>("")
  const [windowStickerPrice, setWindowStickerPrice] = useState<string>("")
  const [mirrorHangerPrice, setMirrorHangerPrice] = useState<string>("")
  const [exteriorColor, setExteriorColor] = useState<string>("Black")
  const [interiorColor, setInteriorColor] = useState<string>("Black")
  const [interiorFabric, setInteriorFabric] = useState<string>("Cloth")
  const [description, setDescription] = useState<string>("")
  const [showAdditionalPostingOptions, setShowAdditionalPostingOptions] = useState<boolean>(false)
  const [selectedFeaturesCount, setSelectedFeaturesCount] = useState<number>(164)
  const [totalFeaturesCount] = useState<number>(178)
  const [selectAllStandardFeatures, setSelectAllStandardFeatures] = useState<boolean>(false)
  const [cityMpg, setCityMpg] = useState<string>("27")
  const [highwayMpg, setHighwayMpg] = useState<string>("39")

  const [photos, setPhotos] = useState<Photo[]>([])
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0)
  const [isZoomModalOpen, setIsZoomModalOpen] = useState<boolean>(false)
  const [zoomLevel, setZoomLevel] = useState<number>(1)

  const interiorFabrics = ["Cloth", "Leather", "Others"]
  const conditions = ["New", "Used", "Manufacturer Certified", "Repairable"]

  const handleFileUpload = (): void => {
    const input: HTMLInputElement = document.createElement("input")
    input.type = "file"
    input.multiple = true
    input.accept = "image/*"
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files
      if (files) {
        const newPhotos: Photo[] = []
        const remainingSlots = 6 - photos.length
        const filesToProcess = Math.min(files.length, remainingSlots)

        for (let i = 0; i < filesToProcess; i++) {
          const file = files[i]
          const photo: Photo = {
            id: Date.now().toString() + i,
            url: URL.createObjectURL(file),
            file: file,
          }
          newPhotos.push(photo)
        }
        const updatedPhotos = [...photos, ...newPhotos]
        setPhotos(updatedPhotos)
        if (newPhotos.length > 0) {
          setSelectedPhotoIndex(updatedPhotos.length - 1)
        }
      }
    }
    input.click()
  }

  const handleDeletePhoto = (photoId: string): void => {
    setPhotos((prev) => {
      const updated = prev.filter((photo) => photo.id !== photoId)
      if (selectedPhotoIndex >= updated.length && updated.length > 0) {
        setSelectedPhotoIndex(updated.length - 1)
      } else if (updated.length === 0) {
        setSelectedPhotoIndex(0)
      }
      return updated
    })
  }

  const handleZoomIn = (): void => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3))
  }

  const handleZoomOut = (): void => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 0.5))
  }

  const openZoomModal = (index: number): void => {
    setSelectedPhotoIndex(index)
    setZoomLevel(1)
    setIsZoomModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-10">
      <div className="grid mb-8">
        <div
          className="flex items-center gap-2 text-lg sm:text-xl md:text-[28px] font-semibold cursor-pointer"
          onClick={() => window.history.back()}
        >
          <MdOutlineKeyboardArrowLeft size={35} />
          <span className="break-words">Edit: 2015 Chevrolet Silverado 1500</span>
        </div>
        <p className="opacity-55 ml-8 sm:ml-11 text-xs md:text-base">Update: 4/28/2025 9:41 pm (20 hours ago)</p>
      </div>

      <div className="w-full mx-auto bg-white rounded-lg shadow-sm p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Vehicle, Location, Information */}
          <div className="lg:col-span-1.2 space-y-6">
            {/* Location Section */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Location</h3>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Where is this vehicle located?*</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Autowurx" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="autowurx">Autowurx</SelectItem>
                    <SelectItem value="location2">Location 2</SelectItem>
                    <SelectItem value="location3">Location 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Information Section */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Information</h3>
              <div className="space-y-0">
                <div className="flex justify-between py-3 sm:py-4 px-2 sm:px-4">
                  <span className="text-sm text-gray-600">VIN</span>
                  <span className="text-sm text-gray-600 break-all sm:break-normal">1N4AL3AP8GN321327</span>
                </div>
                <div className="flex justify-between py-3 sm:py-4 px-2 sm:px-4 bg-[#F5F5F5]">
                  <span className="text-sm text-gray-600">Make</span>
                  <span className="text-sm text-gray-600">Nissan</span>
                </div>
                <div className="flex justify-between py-3 sm:py-4 px-2 sm:px-4">
                  <span className="text-sm text-gray-600">Model</span>
                  <span className="text-sm text-gray-600">Altima</span>
                </div>
                <div className="flex justify-between py-3 sm:py-4 px-2 sm:px-4 bg-[#F5F5F5]">
                  <span className="text-sm text-gray-600">Model Year</span>
                  <span className="text-sm text-gray-600">2016</span>
                </div>
                <div className="flex justify-between py-3 sm:py-4 px-2 sm:px-4">
                  <span className="text-sm text-gray-600">Trim Package</span>
                  <span className="text-sm text-gray-600">2.5 4dr Sedan</span>
                </div>
                <div className="flex justify-between py-3 sm:py-4 px-2 sm:px-4 bg-[#F5F5F5]">
                  <span className="text-sm text-gray-600">Body Style</span>
                  <span className="text-sm text-gray-600">Sedan</span>
                </div>
                <div className="flex justify-between py-3 sm:py-4 px-2 sm:px-4">
                  <span className="text-sm text-gray-600">Engine</span>
                  <span className="text-sm text-gray-600">2.5L I4</span>
                </div>
                <div className="flex justify-between py-3 sm:py-4 px-2 sm:px-4 bg-[#F5F5F5]">
                  <span className="text-sm text-gray-600">Fuel Type</span>
                  <span className="text-sm text-gray-600">Gasoline</span>
                </div>
                <div className="flex justify-between py-3 sm:py-4 px-2 sm:px-4">
                  <span className="text-sm text-gray-600">Transmission</span>
                  <span className="text-sm text-gray-600">CVT</span>
                </div>
                <div className="flex justify-between py-3 sm:py-4 px-2 sm:px-4 bg-[#F5F5F5]">
                  <span className="text-sm text-gray-600">Drivetrain</span>
                  <span className="text-sm text-gray-600">FWD</span>
                </div>
              </div>

              {/* MPG Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div>
                  <Label className="text-sm text-gray-600">City MPG</Label>
                  <Input value={cityMpg} onChange={(e) => setCityMpg(e.target.value)} className="mt-1" />
                </div>
                <div>
                  <Label className="text-sm text-gray-600">Highway MPG</Label>
                  <Input value={highwayMpg} onChange={(e) => setHighwayMpg(e.target.value)} className="mt-1" />
                </div>
              </div>
            </div>

            {/* Standard Information Section */}
            <div className="pt-6">
              <div className="pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 border-t border-[#9E9E9E]"></div>
                  <h3 className="text-lg font-semibold text-gray-900 whitespace-nowrap">Standard Information</h3>
                  <div className="flex-1 border-t border-[#9E9E9E]"></div>
                </div>

                {/* Condition */}
                <div className="mb-6">
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">Condition*</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-2">
                    {conditions.map((condition) => (
                      <button
                        key={condition}
                        onClick={() => setSelectedCondition(condition)}
                        className={`px-3 sm:px-4 py-2 rounded text-sm font-medium transition-colors text-center ${
                          selectedCondition === condition
                            ? "bg-[#FFE135] text-black"
                            : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {condition}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mileage */}
                <div className="mb-4">
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">Mileage*</Label>
                  <Input value={mileage} onChange={(e) => setMileage(e.target.value)} className="w-full" />
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="radio"
                      id="emailMileage"
                      checked={displayEmailForMileage}
                      onChange={(e) => setDisplayEmailForMileage(e.target.checked)}
                      className="w-4 h-4 flex-shrink-0"
                    />
                    <label htmlFor="emailMileage" className="text-sm text-gray-600">
                      Display: "Email for Mileage"
                    </label>
                  </div>
                </div>

                {/* Product ID Number */}
                <div className="mb-4">
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">Product ID Number</Label>
                  <Input
                    placeholder="Product ID"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Additional Information */}
                <button
                  onClick={() => setShowAdditionalInfo(!showAdditionalInfo)}
                  className="flex items-center gap-2 text-sm text-gray-700 border border-[#E8E8E8] p-2 rounded-md hover:text-gray-900 transition-colors w-full sm:w-auto"
                >
                  <div className="w-5 h-5 rounded-full bg-[#606060] flex p-2 items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">{showAdditionalInfo ? "-" : "+"}</span>
                  </div>
                  Additional Information
                </button>

                {/* Additional Information Expanded Section */}
                {showAdditionalInfo && (
                  <div className="mt-6 space-y-4">
                    {/* Engine Description */}
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-2 block">Engine Description</Label>
                      <Input
                        value={engineDescription}
                        onChange={(e) => setEngineDescription(e.target.value)}
                        className="w-full"
                      />
                    </div>

                    {/* Transmission Description */}
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-2 block">Transmission Description</Label>
                      <Input
                        value={transmissionDescription}
                        onChange={(e) => setTransmissionDescription(e.target.value)}
                        className="w-full"
                      />
                    </div>

                    {/* Title Status and Warranty */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label className="text-sm font-medium text-gray-700">Title Status</Label>
                          <div className="w-4 h-4 rounded-full bg-[#344331] flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs">i</span>
                          </div>
                        </div>
                        <Select value={titleStatus} onValueChange={setTitleStatus}>
                          <SelectTrigger>
                            <SelectValue placeholder="Title Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="clean">Clean</SelectItem>
                            <SelectItem value="salvage">Salvage</SelectItem>
                            <SelectItem value="rebuilt">Rebuilt</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">Warranty</Label>
                        <Select value={warranty} onValueChange={setWarranty}>
                          <SelectTrigger>
                            <SelectValue placeholder="Warranty" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="extended">Extended</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Inspection and Inspection Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label className="text-sm font-medium text-gray-700">Inspection</Label>
                          <div className="w-4 h-4 rounded-full bg-[#344331] flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs">i</span>
                          </div>
                        </div>
                        <Select value={inspection} onValueChange={setInspection}>
                          <SelectTrigger>
                            <SelectValue placeholder="No" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">Inspection Date</Label>
                        <Input
                          type="date"
                          value={inspectionDate}
                          onChange={(e) => setInspectionDate(e.target.value)}
                          placeholder="Inspection Date"
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Inspection Note */}
                    <div>
                      <div className="flex items-center gap-1 mb-2">
                        <Label className="text-sm font-medium text-gray-700">Inspection Note</Label>
                        <div className="w-4 h-4 rounded-full bg-[#344331] flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">i</span>
                        </div>
                      </div>
                      <textarea
                        value={inspectionNote}
                        onChange={(e) => setInspectionNote(e.target.value)}
                        placeholder="Type In Your Inspection Notes ..."
                        className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Price Section */}
            <div className="pt-6">
              <div className="pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 border-t border-[#9E9E9E]"></div>
                  <h3 className="text-lg font-semibold text-gray-900 whitespace-nowrap">Price</h3>
                  <div className="flex-1 border-t border-[#9E9E9E]"></div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">Price*</Label>
                  <Input value={price} onChange={(e) => setPrice(e.target.value)} className="w-full" />
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="radio"
                      id="emailPrice"
                      checked={displayEmailForPrice}
                      onChange={(e) => setDisplayEmailForPrice(e.target.checked)}
                      className="w-4 h-4 flex-shrink-0"
                    />
                    <label htmlFor="emailPrice" className="text-sm text-gray-600">
                      Display: "Email for Price"
                    </label>
                  </div>
                </div>

                {/* Additional Pricing */}
                <button
                  onClick={() => setShowAdditionalPricing(!showAdditionalPricing)}
                  className="flex items-center gap-2 text-sm text-gray-700 border border-[#E8E8E8] p-2 rounded-md hover:text-gray-900 transition-colors w-full sm:w-auto"
                >
                  <div className="w-5 h-5 rounded-full bg-[#606060] flex p-2 items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">{showAdditionalPricing ? "-" : "+"}</span>
                  </div>
                  Additional Pricing
                </button>

                {/* Additional Pricing Expanded Section */}
                {showAdditionalPricing && (
                  <div className="mt-6 space-y-4">
                    {/* Special Price */}
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-2 block">Special Price</Label>
                      <Input
                        value={specialPrice}
                        onChange={(e) => setSpecialPrice(e.target.value)}
                        placeholder="170,004"
                        className="w-full"
                      />
                    </div>

                    {/* Window Sticker Price and Mirror Hanger Price */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label className="text-sm font-medium text-gray-700">Window Sticker Price</Label>
                          <div className="w-4 h-4 rounded-full bg-[#344331] flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs">i</span>
                          </div>
                        </div>
                        <Input
                          value={windowStickerPrice}
                          onChange={(e) => setWindowStickerPrice(e.target.value)}
                          placeholder="Window Sticker Price"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label className="text-sm font-medium text-gray-700">Mirror Hanger Price</Label>
                          <div className="w-4 h-4 rounded-full bg-[#344331] flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs">i</span>
                          </div>
                        </div>
                        <Input
                          value={mirrorHangerPrice}
                          onChange={(e) => setMirrorHangerPrice(e.target.value)}
                          placeholder="Mirror Hanger Price"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Color Section */}
            <div className="pt-6">
              <div className="pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 border-t border-[#9E9E9E]"></div>
                  <h3 className="text-lg font-semibold text-gray-900 whitespace-nowrap">Color</h3>
                  <div className="flex-1 border-t border-[#9E9E9E]"></div>
                </div>

                {/* Exterior Color and Interior Color */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      <Label className="text-sm font-medium text-gray-700">Exterior Color</Label>
                      <div className="w-4 h-4 rounded-full bg-[#344331] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">i</span>
                      </div>
                    </div>
                    <Select value={exteriorColor} onValueChange={setExteriorColor}>
                      <SelectTrigger>
                        <SelectValue>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-black flex-shrink-0"></div>
                            <span>{exteriorColor}</span>
                          </div>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Black">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-black"></div>
                            <span>Black</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="White">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-white border"></div>
                            <span>White</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="Silver">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-gray-400"></div>
                            <span>Silver</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      <Label className="text-sm font-medium text-gray-700">Interior Color</Label>
                      <div className="w-4 h-4 rounded-full bg-[#344331] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">i</span>
                      </div>
                    </div>
                    <Select value={interiorColor} onValueChange={setInteriorColor}>
                      <SelectTrigger>
                        <SelectValue>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-black flex-shrink-0"></div>
                            <span>{interiorColor}</span>
                          </div>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Black">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-black"></div>
                            <span>Black</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="Beige">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-[#D4C5A0]"></div>
                            <span>Beige</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="Gray">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-gray-500"></div>
                            <span>Gray</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Interior Fabric */}
                <div className="mb-4">
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">Interior Fabric *</Label>
                  <div className="flex flex-wrap gap-2">
                    {interiorFabrics.map((fabric) => (
                      <button
                        key={fabric}
                        onClick={() => setInteriorFabric(fabric)}
                        className={`px-3 sm:px-4 py-2 rounded text-sm font-medium transition-colors ${
                          interiorFabric === fabric
                            ? "bg-[#FFE135] text-black"
                            : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {fabric}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">Description</Label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Nice Car At A Great Value. Please Call Or Text For Appointment"
                    className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="pt-6">
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>

                {/* All Features */}
                <div className="mb-3">
                  <span className="text-sm text-gray-700">
                    All Features (<span className="text-[#FFE135]">{selectedFeaturesCount}</span>/{totalFeaturesCount})
                  </span>
                </div>

                {/* Select All Standard Features */}
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="radio"
                    id="selectAllStandard"
                    checked={selectAllStandardFeatures}
                    onChange={(e) => setSelectAllStandardFeatures(e.target.checked)}
                    className="w-4 h-4 flex-shrink-0"
                  />
                  <label htmlFor="selectAllStandard" className="text-sm text-gray-700">
                    Select All Standard Features (<span className="text-[#FFE135]">164</span>/164)
                  </label>
                </div>

                {/* Additional Posting Options */}
                <button
                  onClick={() => setShowAdditionalPostingOptions(!showAdditionalPostingOptions)}
                  className="flex items-center gap-2 text-sm text-gray-700 border border-[#E8E8E8] p-2 rounded-md hover:text-gray-900 transition-colors mb-6 w-full sm:w-auto"
                >
                  <div className="w-5 h-5 rounded-full bg-[#606060] flex p-2 items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">{showAdditionalPostingOptions ? "-" : "+"}</span>
                  </div>
                  Additional Posting Options
                </button>

                {/* Cancel and Save Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    className="px-6 sm:px-8 py-2 text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent w-full sm:w-auto"
                  >
                    Cancel
                  </Button>
                  <Button
                    style={{ backgroundColor: "#FFE135" }}
                    className="px-6 sm:px-8 py-2 text-sm font-medium text-black hover:opacity-90 w-full sm:w-auto"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Photos */}
          <div className="lg:col-span-1 lg:px-4 xl:px-20">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-900">{photos.length} Photos</h3>
              </div>
              <Button
                style={{ backgroundColor: "#FFE135" }}
                className="text-black hover:opacity-90 font-medium px-4 py-2 text-sm w-full sm:w-auto"
              >
                Apply Photo
              </Button>
            </div>
            <div className="text-sm text-gray-500 mb-4">
              Do you need more photo to add?
            </div>

            {photos.length === 0 ? (
              // Empty state - show upload area
              <div>
                <div className="bg-[#F5F5F5] p-1 border border-[#E8E8E8] rounded-lg">
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center cursor-pointer hover:border-gray-400 transition-colors h-48 sm:h-72 flex flex-col items-center justify-center"
                    onClick={handleFileUpload}
                  >
                    <div className="text-gray-400 mb-3">
                      <svg className="w-8 h-8 sm:w-12 sm:h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-600 px-2">Drag & Drop To Upload Or Browse From Pc</div>
                  </div>
                </div>
              </div>
            ) : (
              // Photo gallery
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-2">
                  <img
                    src={photos[photos.length - 1]?.url || "/placeholder.svg?height=300&width=400"}
                    alt={`Photo ${photos.length}`}
                    className="w-full h-48 sm:h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {photos.slice(0, 5).map((photo, index) => (
                    <div key={photo.id} className="bg-white border border-gray-200 rounded-lg p-1 sm:p-2">
                      <img
                        src={photo.url || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className={`w-full h-20 sm:h-32 object-cover rounded cursor-pointer transition-all ${
                          selectedPhotoIndex === index ? "ring-2 ring-[#FFE135]" : "hover:opacity-80"
                        }`}
                        onClick={() => setSelectedPhotoIndex(index)}
                      />
                      <div className="flex justify-between mx-1 sm:mx-5 gap-1 mt-1 sm:mt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            openZoomModal(index)
                          }}
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm"
                        >
                          <Search className="w-4 h-4 sm:w-6 sm:h-8 text-gray-700" />
                        </button>
                        <button className="w-5 h-5 sm:w-6 sm:h-6 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm">
                          <RotateCw className="w-4 h-4 sm:w-6 sm:h-8 text-gray-700" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDeletePhoto(photo.id)
                          }}
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm"
                        >
                          <Trash2 className="w-4 h-4 sm:w-6 sm:h-8" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Upload slot - show if less than 6 photos */}
                  {photos.length < 6 && (
                    <div className="bg-white border border-gray-200 rounded-lg p-1 sm:p-2">
                      <div
                        onClick={handleFileUpload}
                        className="w-full h-20 sm:h-32 border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-gray-400 transition-colors flex items-center justify-center"
                      >
                        <Upload className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      </div>
                    </div>
                  )}

                  {/* 6th photo slot - if exactly 6 photos, show 6th photo instead of upload */}
                  {photos.length === 6 && photos[5] && (
                    <div className="bg-white border border-gray-200 rounded-lg p-1 sm:p-2">
                      <img
                        src={photos[5].url || "/placeholder.svg"}
                        alt="Thumbnail 6"
                        className={`w-full h-20 sm:h-32 object-cover rounded cursor-pointer transition-all ${
                          selectedPhotoIndex === 5 ? "ring-2 ring-[#FFE135]" : "hover:opacity-80"
                        }`}
                        onClick={() => setSelectedPhotoIndex(5)}
                      />
                      <div className="flex justify-between mx-1 sm:mx-5 gap-1 mt-1 sm:mt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            openZoomModal(5)
                          }}
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm"
                        >
                          <Search className="w-4 h-4 sm:w-6 sm:h-8 text-gray-700" />
                        </button>
                        <button className="w-5 h-5 sm:w-6 sm:h-6 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm">
                          <RotateCw className="w-4 h-4 sm:w-6 sm:h-8 text-gray-700" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDeletePhoto(photos[5].id)
                          }}
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm text-red-600"
                        >
                          <Trash2 className="w-4 h-4 sm:w-6 sm:h-8" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Dialog open={isZoomModalOpen} onOpenChange={setIsZoomModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle>
              Photo {selectedPhotoIndex + 1} of {photos.length}
            </DialogTitle>
          </DialogHeader>
          <div className="relative flex-1 overflow-hidden">
            <div className="flex items-center justify-center h-[70vh] bg-gray-100">
              <img
                src={photos[selectedPhotoIndex]?.url || "/placeholder.svg?height=400&width=600"}
                alt={`Photo ${selectedPhotoIndex + 1}`}
                className="max-w-full max-h-full object-contain transition-transform duration-200"
                style={{ transform: `scale(${zoomLevel})` }}
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white/90 rounded-lg p-2">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.5}
                className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <span className="px-3 py-2 text-sm font-medium">{Math.round(zoomLevel * 100)}%</span>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EditInventory