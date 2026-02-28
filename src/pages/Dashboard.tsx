import Header from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    ArrowUpRightIcon,
    ChevronDown,
    ChevronUp,
    Plus,
    Repeat,
    Layers,
    Puzzle,
    VideoIcon
} from "lucide-react";
import Profile from "@/assets/Profile.png";
import { Badge } from "@/components/ui/badge";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import ProgressChart from "@/components/dashboard/ProgressChart";
import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "@/services/dashboard.service";
import { useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import TimeTracker from "@/components/dashboard/TimeTracker";
import Loader from "@/components/dashboard/Loader";

const categoryIconMap = {
    subscription: Repeat,
    addon: Puzzle,
};

const Dashboard = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["dashboard"],
        queryFn: getDashboard,
        staleTime: 1000 * 60 * 10, // 10 minutes
    });

    const activeUsers = useMemo(() => data?.users.filter((u) => u.status === "active"), [data?.users]);
    const inactiveUsers = useMemo(() => data?.users.filter((u) => u.status === "inactive"), [data?.users]);

    const statsCards = useMemo(() => [
        {
            title: "Total Users",
            value: data?.overview.totalUsers,
            highlight: true,
            status: {
                count: 5,
                type: "up",
                text: "Increased from last month"
            }
        },
        {
            title: "Active Users",
            value: activeUsers?.length,
            status: {
                count: 6,
                type: "up",
                text: "Increased from last month"
            }
        },
        {
            title: "Inactive Users",
            value: inactiveUsers?.length,
            status: {
                count: 2,
                type: "up",
                text: "Increased from last month"
            }
        },
        {
            title: "Total Products",
            value: data?.products.length,
            status: {
                text: "On Discuss"
            }
        },
    ], [data?.products, activeUsers, inactiveUsers, data?.overview]);

    const progressData = useMemo(() => {
        if (!data?.analytics?.length) {
            return { completed: 0, inProgress: 0 };
        }

        const totals = data?.analytics.reduce(
            (acc, item) => {
                acc.views += item.views;
                acc.clicks += item.clicks;
                acc.conversions += item.conversions;
                return acc;
            },
            { views: 0, clicks: 0, conversions: 0 }
        );

        if (totals.views === 0) {
            return { completed: 0, inProgress: 0 };
        }

        const completed = Math.round((totals.conversions / totals.views) * 100);
        const inProgress = Math.round((totals.clicks / totals.views) * 100);

        return {
            completed,
            inProgress,
        };
    }, [data?.analytics]);

    const productsWithIcons = useMemo(() => {
        return data?.products.map((product) => {
            const Icon =
                categoryIconMap[product.category as keyof typeof categoryIconMap] ??
                Layers; // fallback icon

            return {
                ...product,
                Icon,
            };
        });
    }, [data?.products]);

    useEffect(() => {
        if (isError) {
            toast.error(
                error instanceof Error ? error.message : "Failed to load dashboard"
            );
        }
    }, [isError, error]);


    if (isLoading) {
        return (
            <Loader />
        );
    }

    if (isError || !data) {
        return (
            <div className="min-h-[85vh] flex items-center justify-center p-6 bg-background">
                <div className="w-full max-w-md rounded-lg border border-border bg-card text-card-foreground shadow-lg px-8 py-11 text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-300">
                    <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-8 ring-primary/5">
                        <span className="text-3xl">⚠️</span>
                    </div>
                    <h1 className="mb-2 text-xl font-semibold tracking-tight">
                        Failed to load dashboard
                    </h1>
                    <p className="mb-7 text-sm text-muted-foreground">
                        Something went wrong while fetching dashboard data.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-3 animate-in fade-in-0 slide-in-from-bottom-1 duration-300">
            <Header />
            <div className="bg-sidebar p-4 sm:p-6 lg:p-8 rounded-lg space-y-5">

                {/* Title row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1 sm:space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-medium">Dashboard</h2>
                        <h5 className="text-muted-foreground text-sm sm:text-base">Plan, prioritize, and accomplish your tasks with ease.</h5>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                        <Button variant="default" className="rounded-full gap-1 text-sm" size="default">
                            <Plus className="w-4 h-4" />
                            Add Product
                        </Button>
                        <Button variant="outline" className="rounded-full border-primary/80 text-primary/80 hover:text-primary hover:border-primary hover:bg-background/80 gap-1 text-sm" size="default">
                            Import Data
                        </Button>
                    </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {statsCards.map((stat, index) => (
                        <Card
                            key={index}
                            className={`py-6 rounded-3xl ${stat.highlight
                                ? "bg-linear-150 from-foreground to-green-800"
                                : "bg-background border-none shadow-none"
                                }`}
                        >
                            <CardContent
                                className={`px-6 space-y-5 ${stat.highlight ? "text-background/90" : "text-foreground"
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <h2 className="font-medium text-lg leading-tight">{stat.title}</h2>
                                    <Button size="icon" variant="outline" className="text-foreground border border-foreground rounded-4xl shrink-0">
                                        <ArrowUpRightIcon className="w-5 h-5 transition-all duration-300" />
                                    </Button>
                                </div>
                                <h2 className={cn("text-5xl font-medium", stat.highlight ? "text-background" : "text-foreground")}>{stat.value}</h2>
                                <div className="flex items-center gap-3">
                                    {stat.status.count && stat.status.type && (<div className={cn("flex items-center text-xs border  py-0.5 px-1 rounded-md gap-0.5 font-extralight text-shadow-2xs", stat.highlight ? "border-yellow-200 text-yellow-200" : "border-primary/90 text-primary/90")}>

                                        {stat.status.type === "up" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                    </div>)}
                                    <p className={cn("text-xs text-yellow-200 leading-tight text-shadow-2xs", stat.highlight ? "text-yellow-200" : "text-primary/90")}>{stat.status.text}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Main content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

                    {/* Left 3-col area */}
                    <div className="col-span-1 lg:col-span-3 space-y-5">

                        {/* Analytics + Reminders */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            <Card className="py-6 bg-background border-none shadow-none rounded-3xl col-span-1 sm:col-span-2">
                                <CardContent className="px-6 text-foreground space-y-5">
                                    <AnalyticsChart data={data?.analytics} />
                                </CardContent>
                            </Card>
                            <Card className="py-6 bg-background border-none shadow-none rounded-3xl col-span-1">
                                <CardContent className="px-6 text-foreground flex flex-col gap-8 lg:gap-12 h-full">
                                    <div className="flex items-center justify-between">
                                        <h2 className="leading-tight font-medium text-lg">
                                            Reminders
                                        </h2>
                                    </div>
                                    <div className="space-y-1">
                                        <h2 className="text-2xl font-medium">
                                            Meeting with Arc <br /> Company
                                        </h2>
                                        <h5 className="text-muted-foreground leading-tight">
                                            Time: 02.00 pm - 04.00 pm
                                        </h5>
                                    </div>
                                    <Button variant="default" className="rounded-full gap-2 w-full py-6 mt-auto">
                                        <VideoIcon />
                                        Start Meeting
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-5 gap-5">
                            <Card className="py-6 bg-background border-none shadow-none rounded-3xl col-span-1 sm:col-span-3">
                                <CardContent className="px-6 text-foreground space-y-5">
                                    {/* flex-wrap so button drops below on narrow screens */}
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <h2 className="leading-tight font-medium text-lg">Team Collaboration</h2>
                                        <Button variant="outline" className="rounded-full border-primary/80 text-primary/80 hover:text-primary hover:border-primary hover:bg-background/80" size="lg">
                                            <Plus className="w-4 h-4" />
                                            Add Member
                                        </Button>
                                    </div>
                                    <div className="space-y-6">
                                        {data?.users.slice(0, 4).map((user) => (
                                            <div key={user.id} className="flex items-start gap-3 sm:gap-4">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full bg-chart-4 p-1 shrink-0">
                                                    <img src={Profile} alt={user.name} className="sm:w-12 sm:h-12 w-10 h-10 object-contain" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-medium text-base sm:text-lg">
                                                        {user.name}
                                                    </h3>
                                                    <div className="flex items-start justify-between gap-2">
                                                        <h5 className="text-muted-foreground text-xs sm:text-sm leading-snug">
                                                            Joined on{" "}
                                                            <strong className="text-foreground/80 font-medium">
                                                                {user.joinDate}
                                                            </strong>
                                                        </h5>
                                                        <Badge
                                                            variant={
                                                                user.status === "active"
                                                                    ? "default"
                                                                    : "secondary"
                                                            }
                                                            className="shrink-0 mt-0.5"
                                                        >
                                                            {user.status}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="py-6 bg-background border-none shadow-none rounded-3xl col-span-1 sm:col-span-2">
                                <CardContent className="px-6 text-foreground flex flex-col gap-5">
                                    <h2 className="leading-tight font-medium text-lg">Product Progress</h2>
                                    <ProgressChart
                                        completed={progressData.completed}
                                        inProgress={progressData.inProgress}
                                    />
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-3.5 h-3.5 rounded-sm shrink-0" style={{ background: "color-mix(in srgb, var(--color-primary) 100%, black 25%)" }} />
                                            <span className="text-xs sm:text-sm text-foreground">Completed</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-3.5 h-3.5 rounded-sm bg-primary shrink-0" />
                                            <span className="text-xs sm:text-sm text-foreground">In Progress</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-3.5 h-3.5 rounded-sm bg-secondary shrink-0" />
                                            <span className="text-xs sm:text-sm text-foreground">Pending</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Right sidebar col */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                        <Card className="py-6 bg-background border-none shadow-none rounded-3xl">
                            <CardContent className="px-6 text-foreground space-y-5">
                                <div className="flex items-center justify-between">
                                    <h2 className="leading-tight font-medium text-lg">
                                        Product
                                    </h2>
                                    <Button variant="outline" className="rounded-full border-primary/80 text-primary/80 hover:text-primary hover:border-primary hover:bg-background/80 gap-1" size="default">
                                        <Plus className="w-4 h-4" />
                                        New
                                    </Button>
                                </div>
                                <div className="space-y-6">
                                    {productsWithIcons?.map((product) => {
                                        const Icon = product.Icon;
                                        return (
                                            <div key={product.id} className="flex items-center gap-4">
                                                <Icon className="w-8 h-8 text-primary shrink-0" />
                                                <div className="flex-1 space-y-1 min-w-0">
                                                    <h3 className="text-base truncate">{product.name}</h3>
                                                    <h5 className="text-muted-foreground text-sm leading-tight">
                                                        ${product.price} • {product.sales} sales
                                                    </h5>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                        <TimeTracker />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;