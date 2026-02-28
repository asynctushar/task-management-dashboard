import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { useMemo } from "react";

interface Props {
    completed: number;
    inProgress: number;
}

const chartConfig = {
    completed: {
        label: "Completed",
        color: "color-mix(in srgb, var(--color-primary) 100%, black 25%)",
    },
    inProgress: {
        label: "In Progress",
        color: "var(--color-primary)",
    },
    pending: {
        label: "Pending",
        color: "var(--color-secondary)",
    },
} satisfies ChartConfig;

const ProgressChart = ({ completed, inProgress }: Props) => {
    const safeData = useMemo(() => {
        const safeCompleted = Math.min(Math.max(completed, 0), 100);
        const safeInProgress = Math.min(Math.max(inProgress, 0), 100 - safeCompleted);
        const pending = 100 - safeCompleted - safeInProgress;

        return [
            {
                completed: safeCompleted,
                inProgress: safeInProgress,
                pending,
            },
        ];
    }, [completed, inProgress]);

    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full max-w-[320px] lg:mt-12 -mb-32"
        >
            <RadialBarChart
                data={safeData}
                endAngle={180}
                innerRadius="75%"
                outerRadius="145%"
            >
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) - 20}
                                            className="fill-foreground text-4xl font-bold"
                                        >
                                            {safeData[0].completed}%
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) + 8}
                                            className="fill-muted-foreground text-sm"
                                        >
                                            Completed
                                        </tspan>
                                    </text>
                                );
                            }
                        }}
                    />
                </PolarRadiusAxis>

                <RadialBar
                    dataKey="pending"
                    stackId="a"
                    cornerRadius={4}
                    fill="var(--color-secondary)"
                    className="stroke-transparent stroke-2"
                />
                <RadialBar
                    dataKey="inProgress"
                    stackId="a"
                    cornerRadius={4}
                    fill="var(--color-primary)"
                    className="stroke-transparent stroke-2"
                />
                <RadialBar
                    dataKey="completed"
                    stackId="a"
                    cornerRadius={4}
                    fill="color-mix(in srgb, var(--color-primary) 100%, black 25%)"
                    className="stroke-transparent stroke-2"
                />
            </RadialBarChart>
        </ChartContainer>
    );
};

export default ProgressChart;