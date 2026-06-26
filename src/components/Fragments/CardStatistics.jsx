import React from "react";
import Card from "../Elements/Card";
import BarsDataset from "../Elements/BarsDataset";

function CardStatistics(props) {
  const { data } = props;

  return (
    <Card
      title="Statistics"
      contentClassName="px-6 py-5"
      desc={
        <div className="w-full h-full">
          <div className="text-2xl font-bold text-gray-800 mb-2">
            Weekly Comparison⌄
          </div>

          <BarsDataset dataset={data} />
        </div>
      }
    />
  );
}

export default CardStatistics;