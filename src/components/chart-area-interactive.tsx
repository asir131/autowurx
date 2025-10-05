"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const salesData = [
  { day: "Sat", value: 97 },
  { day: "Sun", value: 84 },
  { day: "Mon", value: 96 },
  { day: "Tue", value: 32 },
  { day: "Wed", value: 85 },
  { day: "Thu", value: 98 },
  { day: "Fri", value: 98 },
]

const leadsData = [
  { day: "Sat", value: 97 },
  { day: "Sun", value: 82 },
  { day: "Mon", value: 95 },
  { day: "Tue", value: 32 },
  { day: "Wed", value: 85 },
  { day: "Thu", value: 98 },
  { day: "Fri", value: 98 },
]

const salesConfig = {
  value: {
    label: "Sales",
    color: "#252525",
  },
} satisfies ChartConfig

const leadsConfig = {
  value: {
    label: "Leads", 
    color: "#FFE135",
  },
} satisfies ChartConfig

export function DualBarCharts() {
  const [salesTimeRange, setSalesTimeRange] = React.useState("Weekly")
  const [leadsTimeRange, setLeadsTimeRange] = React.useState("Weekly")

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-">
      {/* Total Sales Chart */}
      <Card className="p-5 rounded-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-semibold">Total Sales</CardTitle>
          <select 
            value={salesTimeRange} 
            onChange={(e) => setSalesTimeRange(e.target.value)}
            className="w-24 h-8 text-sm border border-gray-200 rounded px-2 bg-white"
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Daily">Daily</option>
          </select>
        </CardHeader>
        <CardContent className="pt-0">
          <ChartContainer config={salesConfig} className="h-[280px] w-full">
            <BarChart data={salesData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis  className="opacity-70"
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 16, fill: '#6b7280' }}
              />
              <YAxis className="opacity-70"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 16, fill: '#6b7280' }}
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
                ticks={[0, 20, 40, 60, 80, 100]}
              />
              <ChartTooltip 
                content={<ChartTooltipContent />}
                cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
              />
              <Bar 
                dataKey="value" 
                fill="var(--color-value)"
                radius={[2, 2, 0, 0]}
                maxBarSize={55}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Total Leads Chart */}
      <Card className="p-5 rounded-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-semibold">Total Leads</CardTitle>
          <select 
            value={leadsTimeRange} 
            onChange={(e) => setLeadsTimeRange(e.target.value)}
            className="w-24 h-8 text-sm border opacity-70 border-gray-200 rounded px-2 bg-white"
            
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Daily">Daily</option>
          </select>
        </CardHeader>
        <CardContent className="pt-0">
          <ChartContainer config={leadsConfig} className="h-[280px] w-full">
            <BarChart data={leadsData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis className="opacity-70"
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 16, fill: '#6b7280' }}
              />
              <YAxis  className="opacity-70"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 16, fill: '#6b7280' }}
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
                ticks={[0, 20, 40, 60, 80, 100]}
              />
              <ChartTooltip 
                content={<ChartTooltipContent />}
                cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
              />
              <Bar 
                dataKey="value" 
                fill="var(--color-value)"
                radius={[2, 2, 0, 0]}
                maxBarSize={55}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}