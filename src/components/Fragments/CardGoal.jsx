import React, { useContext } from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import { ThemeContext } from "../../context/themeContext";

function CardGoal(props) {
  const { data = {} } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      title="Goals"
      contentClassName="px-4 py-3"
      desc={
        <div className="h-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-900 me-3">
                ${data.targetAmount}
              </span>

              <div className="w-6 h-6 bg-gray-100 text-gray-400 rounded-md flex items-center justify-center">
                <Icon.Edit size={14} />
              </div>
            </div>

            <div className="text-[10px] font-semibold text-gray-700">
              Nov, 2023
            </div>
          </div>

          <div className="border-b border-gray-200 my-2"></div>

          <div className="flex justify-between items-center">
            <div className="w-[45%]">
              <div className="flex items-center text-gray-400 mb-3">
                <Icon.Award size={16} />

                <div className="ms-2">
                  <div className="text-[10px] leading-3">
                    Target Achieved
                  </div>
                  <div className="font-bold text-sm text-black leading-5">
                    ${data.presentAmount}
                  </div>
                </div>
              </div>

              <div className="flex items-center text-gray-400">
                <Icon.Target size={16} />

                <div className="ms-2">
                  <div className="text-[10px] leading-3">
                    This Month Target
                  </div>
                  <div className="font-bold text-sm text-black leading-5">
                    ${data.targetAmount}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[52%] flex flex-col items-center">
              <svg
                width="105"
                height="54"
                viewBox="0 0 120 70"
                className="overflow-visible"
              >
                <path
                  d="M 18 58 A 42 42 0 0 1 102 58"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="12"
                />

                <path
                  d="M 18 58 A 42 42 0 0 1 82 19"
                  fill="none"
                  stroke={theme.color}
                  strokeWidth="12"
                />

                <line
                  x1="60"
                  y1="58"
                  x2="82"
                  y2="20"
                  stroke={theme.color}
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                <circle cx="60" cy="58" r="6" fill={theme.color} />
              </svg>

              <div className="w-full flex justify-between -mt-1">
                <span className="text-[10px] text-gray-400">$0</span>
                <span className="font-bold text-base leading-none">12K</span>
                <span className="text-[10px] text-gray-400">$20K</span>
              </div>

              <div className="text-[10px] font-semibold mt-1">
                Target vs Achievement
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default CardGoal;