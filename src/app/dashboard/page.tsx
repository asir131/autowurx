


import { DualBarCharts } from "@/components/chart-area-interactive"
import { ExistingInventoryTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"


export default function Page() {
  return (
    < >
      <SectionCards />
      <div className="px-4 lg:px-6">
        <DualBarCharts />
      </div>
      <ExistingInventoryTable  />
    </>
  )
}