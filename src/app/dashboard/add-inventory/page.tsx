"use client"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const page = () => {
  return (
    <div className="min-h-screen  p-4">
      {/* Header */}
      <div  onClick={() => window.history.back()} className="flex items-center gap-2 text-[28px] ml-5 font-semibold cursor-pointer mb-8">
        <MdOutlineKeyboardArrowLeft size={35} />
        Add Inventory
      </div>

      {/* Form Card */}
      <div className="max-w-2xl md:ml-10 ">
        <Card className="bg-white p-10 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">What is a Standard Vehicle?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Decode VIN Section */}
            <div className="space-y-3">
              <Label htmlFor="vin" className="text-sm font-medium text-gray-700">
                Decode VIN
              </Label>
              <div className="flex gap-2">
                <Input id="vin" placeholder="VIN" className="flex-1" />
                <Button style={{ backgroundColor: "#FFE135" }} className="text-black hover:opacity-90 font-medium px-4">
                  Decode
                </Button>
              </div>
            </div>

            {/* Make Field */}
            <div className="space-y-2">
              <Label htmlFor="make" className="text-sm font-medium text-gray-700">
                Make<span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Make" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                  <SelectItem value="chevrolet">Chevrolet</SelectItem>
                  <SelectItem value="nissan">Nissan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Model Field */}
            <div className="space-y-2">
              <Label htmlFor="model" className="text-sm font-medium text-gray-700">
                Model<span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="camry">Camry</SelectItem>
                  <SelectItem value="accord">Accord</SelectItem>
                  <SelectItem value="f150">F-150</SelectItem>
                  <SelectItem value="silverado">Silverado</SelectItem>
                  <SelectItem value="altima">Altima</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Model Year Field */}
            <div className="space-y-2">
              <Label htmlFor="year" className="text-sm font-medium text-gray-700">
                Model Year<span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Trim Package Field */}
            <div className="space-y-2">
              <Label htmlFor="trim" className="text-sm font-medium text-gray-700">
                Trim Package
              </Label>
              <Input id="trim" placeholder="Trim Package" />
            </div>

            {/* Action Buttons */}
            <div className="flex  gap-3 pt-4">
              <Link href="#">
              <Button
                variant="outline"
                className="flex-1 text-gray-600 border-gray-300 hover:bg-gray-50 bg-transparent"
              >
                Cancel
              </Button>
              </Link>
              <Link href="/dashboard/add-inventory/continue-add-inventory">
                <Button
                  style={{ backgroundColor: "#FFE135" }}
                  className="flex-1 text-black hover:opacity-90 font-medium"
                >
                  Continue
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default page