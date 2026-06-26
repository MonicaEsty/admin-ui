import React, { useState } from "react";

function CardRecentTransaction(props) {
  const { data = [] } = props;

  const tabs = ["All", "Revenue", "Expense"];
  const [active, setActive] = useState("All");

  const filteredData =
    active === "All"
      ? data
      : data.filter(
          (item) => item.type.toLowerCase() === active.toLowerCase()
        );

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl text-gray-400 font-light leading-none">
          Recent Transactions
        </h2>

        <a
          href="/transaction"
          className="text-xs text-gray-400 hover:text-gray-600"
        >
          View All
        </a>
      </div>

      <div className="flex-1 bg-white rounded-lg shadow-md px-6 py-5 overflow-hidden">
        <div className="flex items-center gap-8 mb-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={
                active === tab
                  ? "pb-2 text-sm font-bold text-primary border-b-4 border-primary"
                  : "pb-2 text-sm font-bold text-gray-400 border-b-4 border-transparent"
              }
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="h-[calc(100%-52px)] flex flex-col justify-between">
          {filteredData.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center min-w-0">
                <div className="w-11 h-11 bg-[#F5F5F5] rounded-lg flex items-center justify-center shrink-0">
                  {React.cloneElement(item.icon, {
                    size: 23,
                    color: "#000000",
                  })}
                </div>

                <div className="ms-4 min-w-0">
                  <div className="text-base font-bold text-black leading-tight truncate">
                    {item.transactionName}
                  </div>

                  <div className="text-sm text-gray-400 leading-tight mt-1 truncate">
                    {item.shopName}
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="text-base font-bold text-gray-500 leading-tight">
                  ${item.amount}
                </div>

                <div className="text-sm text-gray-400 leading-tight mt-1">
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardRecentTransaction;