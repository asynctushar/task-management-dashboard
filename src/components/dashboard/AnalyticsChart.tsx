import { Bar, BarChart, CartesianGrid, XAxis, Cell, LabelList } from "recharts";
import { ChartContainer, type ChartConfig } from "../ui/chart";
import { useMemo, useState } from "react";

interface AnalyticsItem {
    date: string;
    views: number;
    clicks: number;
    conversions: number;
}

interface Props {
    data: AnalyticsItem[];
}

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
    empty: "color-mix(in srgb, var(--color-secondary) 40%, transparent)",
};

const getResultLevel = (percentage: number) => {
    if (percentage >= 80) return "high";
    if (percentage >= 65) return "average";
    if (percentage >= 50) return "medium";
    return "low";
};

const AnalyticsChart = ({ data }: Props) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // 🔥 Transform API data → chart data
    const chartData = useMemo(() => {
        const weekTemplate = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        if (!data?.length) {
            return weekTemplate.map((day) => ({
                day: day[0],
                percentage: 0,
                result: "empty",
            }));
        }

        // Map API data by weekday
        const dataByDay: Record<string, number> = {};

        data.forEach((item) => {
            const weekday = new Date(item.date).toLocaleDateString("en-US", {
                weekday: "short",
            });

            dataByDay[weekday] = item.views;
        });

        const maxViews = Math.max(...Object.values(dataByDay), 0);

        return weekTemplate.map((day) => {
            const views = dataByDay[day] ?? 0;

            const percentage =
                maxViews > 0 ? Math.round((views / maxViews) * 100) : 0;

            return {
                day: day[0], // S M T W T F S
                percentage,
                result:
                    views === 0
                        ? "empty"
                        : getResultLevel(percentage),
            };
        });
    }, [data]);

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
            <BarChart accessibilityLayer data={chartData} margin={{ top: 32 }}>
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