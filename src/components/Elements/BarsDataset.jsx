import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { ThemeContext } from "../../context/themeContext";

const chartSetting = {
  height: 300,
  yAxis: [
    {
      disableTicks: true,
      disableLine: true,
      width: 50,
      min: 0,
      max: 50000,
      valueFormatter: (value) => value.toLocaleString(),
    },
  ],
  margin: {
    top: 35,
    right: 35,
    bottom: 35,
    left: 55,
  },
  grid: {
    horizontal: true,
  },
  sx: {
    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
      fill: "#9F9F9F",
    },
    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
      fill: "#9F9F9F",
    },
  },
};

export default function BarsDataset(props) {
  const { dataset } = props;
  const { theme } = React.useContext(ThemeContext);

  const series = dataset.series.map((item, index) => ({
    ...item,
    color: index === 1 ? theme.color : item.color,
  }));

  return (
    <BarChart
      dataset={dataset.data}
      xAxis={[
        {
          scaleType: "band",
          dataKey: dataset.dataKey,
        },
      ]}
      series={series}
      {...chartSetting}
    />
  );
}