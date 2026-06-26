import { BarChart } from "@mui/x-charts/BarChart";

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
      fontSize: "12px",
    },
    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
      fill: "#9F9F9F",
      fontSize: "12px",
    },
    "& .MuiChartsAxis-left .MuiChartsAxis-label": {
      fill: "#111827",
      fontSize: "12px",
    },
    "& .MuiChartsGrid-line": {
      stroke: "#E5E7EB",
      strokeWidth: 1,
    },
  },
};

export default function BarsDataset(props) {
  const { dataset } = props;

  return (
    <div className="w-full h-full">
      <BarChart
        dataset={dataset.data}
        xAxis={[
          {
            scaleType: "band",
            dataKey: dataset.dataKey,
            disableTicks: true,
            disableLine: false,
            categoryGapRatio: 0.45,
            barGapRatio: 0.15,
          },
        ]}
        series={dataset.series}
        {...chartSetting}
        slotProps={{
          legend: {
            direction: "row",
            position: {
              vertical: "top",
              horizontal: "middle",
            },
            padding: 0,
            itemMarkWidth: 12,
            itemMarkHeight: 12,
            labelStyle: {
              fontSize: 11,
            },
          },
        }}
      />
    </div>
  );
}