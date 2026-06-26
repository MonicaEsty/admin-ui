import React from "react";
import { Link } from "react-router-dom";
import Card from "../Elements/Card";
import DotsMobileStepper from "../Elements/DotsMobileStepper";
import Icon from "../Elements/Icon";

function CardBalance(props) {
  const { data = [] } = props;

  return (
    <Card
      title="Total Balance"
      contentClassName="px-4 py-3"
      desc={
        <DotsMobileStepper
          data={data.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between items-center">
                <div className="text-lg font-bold text-gray-900">
                  ${item.balance}
                </div>

                <Link to="/balance" className="text-[10px] text-gray-800">
                  All account
                </Link>
              </div>

              <div className="border-b border-gray-200 my-2"></div>

              <div className="flex justify-between bg-primary text-white px-3 py-2 rounded-md h-[64px] overflow-hidden">
                <div>
                  <div className="text-[10px] leading-4">Account Type</div>

                  <div className="text-sm font-bold leading-4">
                    {item.accountType}
                  </div>

                  <div className="text-[10px] leading-4">
                    {item.accountNumber}
                  </div>
                </div>

                <div className="flex flex-col justify-between items-end">
                  <div className="h-5 flex items-start">{item.logo}</div>

                  <div className="flex items-center">
                    <span className="text-sm font-bold me-1">
                      ${item.balance}
                    </span>

                    <div className="bg-white text-primary rounded-full p-[2px] flex items-center justify-center">
                      <Icon.ArrowUpRight width={14} height={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        />
      }
    />
  );
}

export default CardBalance;