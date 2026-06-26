import React from "react";
import Card from "../Elements/Card";

function CardUpcomingBill(props) {
  const { data = [] } = props;

  return (
    <Card
      title="Upcoming Bill"
      link="/bills"
      contentClassName="px-4 py-3"
      desc={
        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-[46px] h-[58px] bg-gray-100 rounded-lg flex flex-col items-center justify-center me-4 shrink-0">
                  <span className="text-[10px] font-semibold text-gray-600 leading-4">
                    {item.month}
                  </span>

                  <span className="text-xl font-bold text-gray-900 leading-6">
                    {item.date}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-9 h-6 flex items-center justify-center">
                      {item.icon}
                    </div>

                    <span className="text-[11px] font-bold text-gray-900">
                      {item.name.includes("Figma") ? "Figma" : "Adobe"}
                    </span>
                  </div>

                  <div className="text-sm font-bold text-gray-900 leading-5">
                    {item.name}
                  </div>

                  <div className="text-[11px] font-semibold text-gray-700 leading-4">
                    Last Charge - {item.lastCharge}
                  </div>
                </div>
              </div>

              <div className="min-w-[64px] h-[38px] border border-gray-200 rounded-lg flex items-center justify-center text-sm font-bold text-gray-900">
                ${item.amount}
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}

export default CardUpcomingBill;