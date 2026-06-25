import React from "react";

function CardExpensesBreakdown(props) {
  const { data = [] } = props;

  return (
    <div className="h-full flex flex-col">
      <div className="mb-2">
        <h2 className="text-2xl text-gray-400 font-light leading-none">
          Expenses Breakdown
        </h2>
      </div>

      <div className="flex-1 bg-white rounded-lg shadow-md px-7 py-6 overflow-hidden">
        <div className="h-full grid grid-cols-3 gap-x-9 gap-y-8">
          {data.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-11 h-11 bg-[#F5F5F5] rounded-lg flex items-center justify-center shrink-0">
                  {React.cloneElement(item.icon, {
                    size: 20,
                    color: "#000000",
                  })}
                </div>

                <div className="ms-3">
                  <div className="text-xs text-gray-400 leading-none mb-2">
                    {item.category}
                  </div>

                  <div className="text-sm font-bold text-black leading-none mb-2">
                    ${item.amount}
                  </div>

                  <div className="flex items-center gap-1 text-xs text-gray-400 leading-none">
                    <span>{item.percentage}%*</span>
                    {item.arrow}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center min-w-[24px]">
                <span className="text-[#8A8A8A] text-[24px] leading-none">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardExpensesBreakdown;