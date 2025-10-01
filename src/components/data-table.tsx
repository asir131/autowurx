interface InventoryItem {
  productId: string
  vehicle: string
  added: string
  onMarket: string
  price: string
  views: string
}

const inventoryData: InventoryItem[] = [
  {
    productId: "#434232",
    vehicle: "2020 Honda Civic LX",
    added: "6 April 2023",
    onMarket: "10",
    price: "$9,990",
    views: "100",
  },
  {
    productId: "#434232",
    vehicle: "2020 Honda Civic LX",
    added: "6 April 2023",
    onMarket: "10",
    price: "$9,990",
    views: "100",
  },
  {
    productId: "#434232",
    vehicle: "2020 Honda Civic LX",
    added: "6 April 2023",
    onMarket: "10",
    price: "$9,990",
    views: "100",
  },
  {
    productId: "#434232",
    vehicle: "2020 Honda Civic LX",
    added: "6 April 2023",
    onMarket: "10",
    price: "$9,990",
    views: "100",
  },
  {
    productId: "#434232",
    vehicle: "2020 Honda Civic LX",
    added: "6 April 2023",
    onMarket: "10",
    price: "$9,990",
    views: "100",
  },
  {
    productId: "#434232",
    vehicle: "2020 Honda Civic LX",
    added: "6 April 2023",
    onMarket: "10",
    price: "$9,990",
    views: "100",
  },
]

function ExistingInventoryTable() {
  return (
    <div className="md:mx-6 mx-4">
      <div className="w-full mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-base font-medium text-gray-900">Existing Inventory</h2>
          <button className="text-sm font-normal">See All</button>
        </div>

        <div className="overflow-hidden hidden md:block">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-xs font-medium text-gray-500 uppercase tracking-wider py-3 px-6 text-left">
                  Product ID
                </th>
                <th className="text-xs font-medium text-gray-500 uppercase tracking-wider py-3 px-6 text-left">
                  Vehicle
                </th>
                <th className="text-xs font-medium text-gray-500 uppercase tracking-wider py-3 px-6 text-left">
                  Added
                </th>
                <th className="text-xs font-medium text-gray-500 uppercase tracking-wider py-3 px-6 text-left">
                  On Market
                </th>
                <th className="text-xs font-medium text-gray-500 uppercase tracking-wider py-3 px-6 text-left">
                  Price
                </th>
                <th className="text-xs font-medium text-gray-500 uppercase tracking-wider py-3 px-6 text-left">
                  Views
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {inventoryData.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 text-sm text-gray-900">{item.productId}</td>
                  <td className="py-4 px-6 text-md font-semibold text-gray-900">{item.vehicle}</td>
                  <td className="py-4 px-6 text-sm text-gray-500">{item.added}</td>
                  <td className="py-4 px-6 text-sm text-gray-900">{item.onMarket}</td>
                  <td className="py-4 px-6 text-sm text-gray-900">{item.price}</td>
                  <td className="py-4 px-6 text-sm text-gray-900">{item.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden">
          {inventoryData.map((item, index) => (
            <div key={index} className="p-4 border-b border-gray-100 last:border-b-0">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.vehicle}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.productId}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{item.price}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div>
                    <p className="text-gray-500 uppercase tracking-wider font-medium">Added</p>
                    <p className="text-gray-900 mt-1">{item.added}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase tracking-wider font-medium">On Market</p>
                    <p className="text-gray-900 mt-1">{item.onMarket} days</p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase tracking-wider font-medium">Views</p>
                    <p className="text-gray-900 mt-1">{item.views}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { ExistingInventoryTable }
