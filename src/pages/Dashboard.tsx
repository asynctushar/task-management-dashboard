import Header from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRightIcon, ChartArea, ChevronUp, Pause, Plus, Square, VideoIcon } from "lucide-react";
import Profile from "@/assets/Profile.png";
import { Badge } from "@/components/ui/badge";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import ProgressChart from "@/components/dashboard/ProgressChart";

const Dashboard = () => {
    return (
        <div className="space-y-2 animate-in fade-in-0 slide-in-from-bottom-1 duration-300">
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
                            Add Project
                        </Button>
                        <Button variant="outline" className="rounded-full border-primary/80 text-primary/80 hover:text-primary hover:border-primary hover:bg-background/80 gap-1 text-sm" size="default">
                            Import Data
                        </Button>
                    </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <Card className="py-6 bg-linear-150 from-foreground to-green-800 rounded-3xl">
                        <CardContent className="px-6 text-background/90 space-y-5">
                            <div className="flex items-center justify-between">
                                <h2 className="leading-tight font-medium text-lg">
                                    Total Projects
                                </h2>
                                <Button size="icon" variant="outline" className="text-foreground border border-foreground rounded-4xl shrink-0">
                                    <ArrowUpRightIcon className="w-5 h-5 transition-all duration-300" />
                                </Button>
                            </div>
                            <h2 className="text-5xl text-background font-medium">
                                {24}
                            </h2>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center text-xs border border-yellow-200 text-yellow-200 py-0.5 px-1 rounded-md gap-0.5 font-extralight text-shadow-2xs">
                                    5
                                    <ChevronUp className="w-3 h-3" />
                                </div>
                                <p className="text-xs text-yellow-200 leading-tight text-shadow-2xs">Increased from last month</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="py-6 bg-background border-none shadow-none rounded-3xl">
                        <CardContent className="px-6 text-foreground space-y-5">
                            <div className="flex items-center justify-between">
                                <h2 className="leading-tight font-medium text-lg">
                                    Ended Projects
                                </h2>
                                <Button size="icon" variant="outline" className="text-foreground border border-foreground rounded-4xl shrink-0">
                                    <ArrowUpRightIcon className="w-5 h-5 transition-all duration-300" />
                                </Button>
                            </div>
                            <h2 className="text-5xl text-foreground font-medium">
                                {10}
                            </h2>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center text-xs border border-primary/90 text-primary/90 py-0.5 px-1 rounded-md gap-0.5 font-extralight text-shadow-2xs">
                                    6
                                    <ChevronUp className="w-3 h-3" />
                                </div>
                                <p className="text-xs text-primary/90 text-shadow-2xs leading-tight">Increased from last month</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="py-6 bg-background border-none shadow-none rounded-3xl">
                        <CardContent className="px-6 text-foreground space-y-5">
                            <div className="flex items-center justify-between">
                                <h2 className="leading-tight font-medium text-lg">
                                    Running Projects
                                </h2>
                                <Button size="icon" variant="outline" className="text-foreground border border-foreground rounded-4xl shrink-0">
                                    <ArrowUpRightIcon className="w-5 h-5 transition-all duration-300" />
                                </Button>
                            </div>
                            <h2 className="text-5xl text-foreground font-medium">
                                {12}
                            </h2>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center text-xs border border-primary/90 text-primary/90 py-0.5 px-1 rounded-md gap-0.5 font-extralight text-shadow-2xs">
                                    2
                                    <ChevronUp className="w-3 h-3" />
                                </div>
                                <p className="text-xs text-primary/90 text-shadow-2xs leading-tight">Increased from last month</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="py-6 bg-background border-none shadow-none rounded-3xl">
                        <CardContent className="px-6 text-foreground space-y-5">
                            <div className="flex items-center justify-between">
                                <h2 className="leading-tight font-medium text-lg">
                                    Pending Projects
                                </h2>
                                <Button size="icon" variant="outline" className="text-foreground border border-foreground rounded-4xl shrink-0">
                                    <ArrowUpRightIcon className="w-5 h-5 transition-all duration-300" />
                                </Button>
                            </div>
                            <h2 className="text-5xl text-foreground font-medium">
                                {2}
                            </h2>
                            <div className="flex items-center gap-3">
                                <p className="text-xs text-primary/90 text-shadow-2xs leading-tight">On Discuss</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Main content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">

                    {/* Left 3-col area */}
                    <div className="col-span-1 lg:col-span-3 space-y-4">

                        {/* Analytics + Reminders */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <Card className="py-6 bg-background border-none shadow-none rounded-3xl col-span-1 sm:col-span-2">
                                <CardContent className="px-6 text-foreground space-y-5">
                                    <AnalyticsChart />
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
                                        Add Project
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
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
                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full bg-chart-4 p-1 shrink-0">
                                                <img src={Profile} alt="User Profile" className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-medium text-base sm:text-lg">{"Alexandra Deff"}</h3>
                                                <div className="flex items-start justify-between gap-2">
                                                    <h5 className="text-muted-foreground text-xs sm:text-sm leading-snug">
                                                        Working on{" "}
                                                        <strong className="text-foreground/80 font-medium">Github Project Repository</strong>
                                                    </h5>
                                                    <Badge className="shrink-0 mt-0.5">Completed</Badge>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full bg-chart-4 p-1 shrink-0">
                                                <img src={Profile} alt="User Profile" className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-medium text-base sm:text-lg">{"Alexandra Deff"}</h3>
                                                <div className="flex items-start justify-between gap-2">
                                                    <h5 className="text-muted-foreground text-xs sm:text-sm leading-snug">
                                                        Working on{" "}
                                                        <strong className="text-foreground/80 font-medium">Github Project Repository</strong>
                                                    </h5>
                                                    <Badge variant="secondary" className="shrink-0 mt-0.5">In Progress</Badge>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full bg-chart-4 p-1 shrink-0">
                                                <img src={Profile} alt="User Profile" className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-medium text-base sm:text-lg">{"Alexandra Deff"}</h3>
                                                <div className="flex items-start justify-between gap-2">
                                                    <h5 className="text-muted-foreground text-xs sm:text-sm leading-snug">
                                                        Working on{" "}
                                                        <strong className="text-foreground/80 font-medium">Github Project Repository</strong>
                                                    </h5>
                                                    <Badge variant="destructive" className="shrink-0 mt-0.5">Pending</Badge>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full bg-chart-4 p-1 shrink-0">
                                                <img src={Profile} alt="User Profile" className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-medium text-base sm:text-lg">{"Alexandra Deff"}</h3>
                                                <div className="flex items-start justify-between gap-2">
                                                    <h5 className="text-muted-foreground text-xs sm:text-sm leading-snug">
                                                        Working on{" "}
                                                        <strong className="text-foreground/80 font-medium">Github Project Repository</strong>
                                                    </h5>
                                                    <Badge className="shrink-0 mt-0.5">Completed</Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="py-6 bg-background border-none shadow-none rounded-3xl col-span-1 sm:col-span-2">
                                <CardContent className="px-6 text-foreground flex flex-col gap-5">
                                    <h2 className="leading-tight font-medium text-lg">Project Progress</h2>
                                    <ProgressChart />
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        <Card className="py-6 bg-background border-none shadow-none rounded-3xl">
                            <CardContent className="px-6 text-foreground space-y-5">
                                <div className="flex items-center justify-between">
                                    <h2 className="leading-tight font-medium text-lg">
                                        Project
                                    </h2>
                                    <Button variant="outline" className="rounded-full border-primary/80 text-primary/80 hover:text-primary hover:border-primary hover:bg-background/80 gap-1" size="default">
                                        <Plus className="w-4 h-4" />
                                        New
                                    </Button>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <ChartArea className="w-8 h-8 text-primary shrink-0" />
                                        <div className="flex-1 space-y-1 min-w-0">
                                            <h3 className="text-base truncate">Develop API Endpoints</h3>
                                            <h5 className="text-muted-foreground text-sm leading-tight">
                                                Due date: Nov 26, 2024
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <ChartArea className="w-8 h-8 text-primary shrink-0" />
                                        <div className="flex-1 space-y-1 min-w-0">
                                            <h3 className="text-base truncate">Develop API Endpoints</h3>
                                            <h5 className="text-muted-foreground text-sm leading-tight">
                                                Due date: Nov 26, 2024
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <ChartArea className="w-8 h-8 text-primary shrink-0" />
                                        <div className="flex-1 space-y-1 min-w-0">
                                            <h3 className="text-base truncate">Develop API Endpoints</h3>
                                            <h5 className="text-muted-foreground text-sm leading-tight">
                                                Due date: Nov 26, 2024
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <ChartArea className="w-8 h-8 text-primary shrink-0" />
                                        <div className="flex-1 space-y-1 min-w-0">
                                            <h3 className="text-base truncate">Develop API Endpoints</h3>
                                            <h5 className="text-muted-foreground text-sm leading-tight">
                                                Due date: Nov 26, 2024
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <ChartArea className="w-8 h-8 text-primary shrink-0" />
                                        <div className="flex-1 space-y-1 min-w-0">
                                            <h3 className="text-base truncate">Develop API Endpoints</h3>
                                            <h5 className="text-muted-foreground text-sm leading-tight">
                                                Due date: Nov 26, 2024
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="py-6 bg-linear-150 from-foreground to-green-800 rounded-3xl">
                            <CardContent className="px-6 text-background/90 flex flex-col gap-8 justify-between h-full">
                                <div className="flex items-center justify-between">
                                    <h2 className="leading-tight font-medium text-lg">
                                        Total Tracker
                                    </h2>
                                </div>
                                <h2 className="text-5xl text-center text-background font-medium">
                                    01:24:08
                                </h2>
                                <div className="flex items-center gap-3 justify-center">
                                    <Button size="icon" variant="outline" className="text-primary border border-foreground rounded-4xl">
                                        <Pause className="w-6 h-6 transition-all duration-300" />
                                    </Button>
                                    <Button size="icon" variant="outline" className="text-background border-0 bg-destructive hover:bg-destructive/80 hover:text-background/90 rounded-4xl">
                                        <Square className="w-6 h-6 rounded-sm bg-background" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;