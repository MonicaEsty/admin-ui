import React, { useContext } from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import { ThemeContext } from "../../context/themeContext";

function CardGoal(props) {
  const { data = {} } = props;
  const { theme } = useContext(ThemeContext);

  const targetAmount = Number(data.target_amount ?? data.targetAmount ?? 0);
  const presentAmount = Number(data.present_amount ?? data.presentAmount ?? 0);

  const chartValue =
    targetAmount > 0 ? Math.min((presentAmount / targetAmount) * 100, 100) : 0;

  const shortNumber = (value) => {
    if (value >= 1000) return `${Math.round(value / 1000)}K`;
    return value;
  };

  const cx = 60;
  const cy = 58;
  const r = 42;

  const angle = Math.PI - (Math.PI * chartValue) / 100;

  const arcX = cx + r * Math.cos(angle);
  const arcY = cy - r * Math.sin(angle);

  const needleX = cx + r * 0.68 * Math.cos(angle);
  const needleY = cy - r * 0.68 * Math.sin(angle);

  return (
    <Card
      title="Goals"
      contentClassName="px-4 py-3"
      desc={
        <div className="h-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-900 me-3">
                ${targetAmount}
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
            <div className="w-[44%]">
              <div className="flex items-center text-gray-400 mb-3">
                <Icon.Award size={17} />

                <div className="ms-2">
                  <div className="text-[10px] leading-3">
                    Target Achieved
                  </div>

                  <div className="font-bold text-sm text-black leading-4">
                    ${presentAmount}
                  </div>
                </div>
              </div>

              <div className="flex items-center text-gray-400">
                <Icon.Target size={17} />

                <div className="ms-2">
                  <div className="text-[10px] leading-3">
                    This Month Target
                  </div>

                  <div className="font-bold text-sm text-black leading-4">
                    ${targetAmount}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[54%] flex flex-col items-center">
              <svg
                width="120"
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
                  d={`M 18 58 A 42 42 0 0 1 ${arcX} ${arcY}`}
                  fill="none"
                  stroke={theme.color}
                  strokeWidth="12"
                  strokeLinecap="butt"
                />

                <line
                  x1={cx}
                  y1={cy}
                  x2={needleX}
                  y2={needleY}
                  stroke={theme.color}
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                <circle cx={cx} cy={cy} r="6" fill={theme.color} />
              </svg>

              <div className="w-[120px] flex justify-between -mt-1">
                <span className="text-[10px] text-gray-400">$0</span>

                <span className="font-bold text-base leading-none text-black">
                  {shortNumber(presentAmount)}
                </span>

                <span className="text-[10px] text-gray-400">
                  ${shortNumber(targetAmount)}
                </span>
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