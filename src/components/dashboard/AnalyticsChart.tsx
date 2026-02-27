import { Bar, BarChart, CartesianGrid, XAxis, Cell, LabelList } from "recharts";
import { ChartContainer, type ChartConfig } from "../ui/chart";
import { useState } from "react";

const chartData = [
    { day: "S", percentage: 59, result: "low" },
    { day: "M", percentage: 73, result: "average" },
    { day: "T", percentage: 80, result: "medium" },
    { day: "W", percentage: 77, result: "high" },
    { day: "T", percentage: 50, result: "low" },
    { day: "F", percentage: 61, result: "low" },
    { day: "S", percentage: 71, result: "low" },
];

const chartConfig = {
    percentage: {
        label: "percentage",
        color: "var(--color-primary)",
    },
} satisfies ChartConfig;

const resultFillMap: Record<string, string> = {
    high: "color-mix(in srgb, var(--color-primary) 100%, black 20%)",
    average: "var(--color-primary)",
    medium: "color-mix(in srgb, var(--color-primary) 55%, transparent)",
    low: "var(--color-secondary)",
};

const AnalyticsChart = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const renderCustomLabel = (props: any) => {
        const { x, y, width, index, value } = props;
        if (index !== activeIndex) return null;
        return (
            <text
                x={x + width / 2}
                y={y - 8}
                textAnchor="middle"
                fontSize={12}
                fontWeight={600}
                fill="var(--color-primary)"
            >
                {value}%
            </text>
        );
    };

    return (
        <ChartContainer config={chartConfig} className="h-84 w-full">
            <BarChart
                accessibilityLayer
                data={chartData}
                margin={{ top: 32 }}
            >
                <CartesianGrid vertical={false} horizontal={false} />
                <XAxis
                    dataKey="day"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                />
                <Bar
                    dataKey="percentage"
                    radius={100}
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                >
                    <LabelList dataKey="percentage" content={renderCustomLabel} />
                    {chartData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={resultFillMap[entry.result]}
                        />
                    ))}
                </Bar>
            </BarChart>
        </ChartContainer>
    );
};

export default AnalyticsChart;