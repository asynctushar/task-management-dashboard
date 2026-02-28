import { useEffect, useRef, useState } from "react";
import { Pause, Play, Square } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const TimeTracker = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isRunning]);

    const handlePauseToggle = () => {
        setIsRunning((prev) => !prev);
    };

    const handleStop = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    const formatTime = (totalSeconds: number) => {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        return [hrs, mins, secs]
            .map((unit) => unit.toString().padStart(2, "0"))
            .join(":");
    };

    return (
        <Card className="py-6 bg-linear-150 from-foreground to-green-800 rounded-3xl">
            <CardContent className="px-6 text-background/90 flex flex-col gap-8 justify-between h-full">
                <div className="flex items-center justify-between">
                    <h2 className="leading-tight font-medium text-lg">
                        Time Tracker
                    </h2>
                </div>

                <h2 className="text-5xl text-center text-background font-medium tabular-nums">
                    {formatTime(seconds)}
                </h2>

                <div className="flex items-center gap-3 justify-center">
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={handlePauseToggle}
                        className="text-primary border border-foreground rounded-4xl"
                    >
                        {isRunning ? (
                            <Pause className="w-6 h-6 transition-all duration-300" />
                        ) : (
                            <Play className="w-6 h-6 transition-all duration-300" />
                        )}
                    </Button>

                    <Button
                        size="icon"
                        variant="outline"
                        onClick={handleStop}
                        className="text-background border-0 bg-destructive hover:bg-destructive/80 hover:text-background/90 rounded-4xl"
                    >
                        <Square className="w-6 h-6 rounded-sm bg-background" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default TimeTracker;