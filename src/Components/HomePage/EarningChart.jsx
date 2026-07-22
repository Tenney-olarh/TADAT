import { Link } from "react-router-dom";
import tracks from "../../assets/earningtracks.png";
import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartConfig = {
  earnings: {
    label: "Earnings",
    color: "hsl(var(--chart-1))",
  },
};

const rawData = [
  { date: "2026-07-01", earnings: 120 },
  { date: "2026-07-02", earnings: 98 },
  { date: "2026-07-03", earnings: 150 },
  { date: "2026-07-04", earnings: 175 },
  { date: "2026-07-05", earnings: 130 },
  { date: "2026-07-06", earnings: 210 },
  { date: "2026-07-07", earnings: 190 },
];

const rangeOptions = [
  { label: "Last 24 hours", value: "24h" },
  { label: "Last 7 days", value: "7d" },
  { label: "Last 14 days", value: "14d" },
];

export function EarningsChart() {
  const [range, setRange] = useState("7d");

  const daysToShow = range === "24h" ? 1 : range === "7d" ? 7 : 14;
  const filteredData = rawData.slice(-daysToShow);

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>
          <Link className="flex items-center gap-2">
            <img
              src={tracks}
              alt=""
              className="w-[20px] h-[12px] object-contain"
            />{" "}
            <span>
              Earnings over time <sub>(MB)</sub>
            </span>
          </Link>
        </CardTitle>
        <Select items={rangeOptions} value={range} onValueChange={setRange}>
          <SelectTrigger className="w-[140px] bg-[#39A9D9] rounded-[10px] text-[#FFFFFF]">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            {rangeOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-[441px] w-full bg-[#FFFFFFpx]"
        >
          <AreaChart data={filteredData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              dataKey="earnings"
              type="monotone"
              fill="var(--color-earnings)"
              fillOpacity={0.3}
              stroke="var(--color-earnings)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
export default EarningsChart;