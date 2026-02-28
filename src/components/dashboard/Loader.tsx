import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

const Loader = () => {
    return (
        <div className="space-y-3">

            {/* Header skeleton */}
            <div className="flex items-center justify-between bg-sidebar p-4 sm:p-6 rounded-lg gap-3">
                <Skeleton className="h-9 w-full max-w-xs sm:max-w-sm rounded-full" />
                <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                    <Skeleton className="h-9 w-9 rounded-full shrink-0" />
                    <Skeleton className="h-9 w-9 rounded-full shrink-0" />
                    <div className="flex items-center gap-2 sm:gap-3">
                        <Skeleton className="h-9 w-9 sm:h-12 sm:w-12 rounded-full shrink-0" />
                        <div className="hidden sm:flex flex-col gap-1.5">
                            <Skeleton className="h-4 w-28" />
                            <Skeleton className="h-3 w-36" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main panel */}
            <div className="bg-sidebar p-4 sm:p-6 lg:p-8 rounded-lg space-y-5">

                {/* Title row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-2">
                        <Skeleton className="h-8 w-40" />
                        <Skeleton className="h-4 w-72" />
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                        <Skeleton className="h-9 w-32 rounded-full" />
                        <Skeleton className="h-9 w-28 rounded-full" />
                    </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Highlighted card */}
                    <Card className="py-6 rounded-3xl bg-linear-150 from-foreground to-green-800">
                        <CardContent className="px-6 space-y-5">
                            <div className="flex items-center justify-between">
                                <Skeleton className="h-5 w-28 bg-background/20" />
                                <Skeleton className="h-9 w-9 rounded-full bg-background/20 shrink-0" />
                            </div>
                            <Skeleton className="h-12 w-16 bg-background/20" />
                            <div className="flex items-center gap-3">
                                <Skeleton className="h-5 w-10 rounded-md bg-background/20" />
                                <Skeleton className="h-3 w-36 bg-background/20" />
                            </div>
                        </CardContent>
                    </Card>
                    {/* Plain cards */}
                    {Array.from({ length: 3 }).map((_, i) => (
                        <Card key={i} className="py-6 bg-background border-none shadow-none rounded-3xl">
                            <CardContent className="px-6 space-y-5">
                                <div className="flex items-center justify-between">
                                    <Skeleton className="h-5 w-28" />
                                    <Skeleton className="h-9 w-9 rounded-full shrink-0" />
                                </div>
                                <Skeleton className="h-12 w-16" />
                                <div className="flex items-center gap-3">
                                    <Skeleton className="h-5 w-10 rounded-md" />
                                    <Skeleton className="h-3 w-36" />
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
                                <CardContent className="px-6 space-y-5">
                                    <Skeleton className="h-5 w-32" />
                                    <Skeleton className="h-48 w-full rounded-xl" />
                                    <div className="flex gap-4">
                                        <Skeleton className="h-3 w-16" />
                                        <Skeleton className="h-3 w-16" />
                                        <Skeleton className="h-3 w-16" />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="py-6 bg-background border-none shadow-none rounded-3xl col-span-1">
                                <CardContent className="px-6 flex flex-col gap-8 lg:gap-12 h-full">
                                    <Skeleton className="h-5 w-24" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-7 w-40" />
                                        <Skeleton className="h-4 w-36" />
                                    </div>
                                    <Skeleton className="h-12 w-full rounded-full mt-auto" />
                                </CardContent>
                            </Card>
                        </div>

                        {/* Team + Progress */}
                        <div className="grid grid-cols-1 sm:grid-cols-5 gap-5">
                            <Card className="py-6 bg-background border-none shadow-none rounded-3xl col-span-1 sm:col-span-3">
                                <CardContent className="px-6 space-y-5">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <Skeleton className="h-5 w-40" />
                                        <Skeleton className="h-10 w-32 rounded-full" />
                                    </div>
                                    <div className="space-y-6">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <div key={i} className="flex items-start gap-3 sm:gap-4">
                                                <Skeleton className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shrink-0" />
                                                <div className="flex-1 space-y-2 min-w-0">
                                                    <Skeleton className="h-5 w-32" />
                                                    <div className="flex items-center justify-between gap-2">
                                                        <Skeleton className="h-3 w-48" />
                                                        <Skeleton className="h-5 w-16 rounded-full shrink-0" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="py-6 bg-background border-none shadow-none rounded-3xl col-span-1 sm:col-span-2">
                                <CardContent className="px-6 flex flex-col gap-5 overflow-hidden">
                                    <Skeleton className="h-5 w-36" />
                                    {/* Semicircle skeleton — matches endAngle={180} chart with -mb-32 */}
                                    <div className="mx-auto w-full max-w-[320px]  lg:mb-8 lg:mt-12">
                                        <div className="relative w-full" style={{ paddingBottom: "50%" }}>
                                            <Skeleton className="absolute inset-0 rounded-t-full" />
                                            {/* Inner cutout to fake the donut hole */}
                                            <div
                                                className="absolute bg-card rounded-t-full"
                                                style={{
                                                    top: "18%",
                                                    left: "18%",
                                                    right: "18%",
                                                    bottom: 0,
                                                }}
                                            />
                                            {/* Center label area */}
                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                                                <Skeleton className="h-8 w-16" />
                                                <Skeleton className="h-3 w-14" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between flex-wrap">
                                        <div className="flex items-center gap-1.5">
                                            <Skeleton className="w-3.5 h-3.5 rounded-sm shrink-0" />
                                            <Skeleton className="h-3 w-16" />
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Skeleton className="w-3.5 h-3.5 rounded-sm shrink-0" />
                                            <Skeleton className="h-3 w-16" />
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Skeleton className="w-3.5 h-3.5 rounded-sm shrink-0" />
                                            <Skeleton className="h-3 w-16" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Right sidebar col */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                        {/* Product list */}
                        <Card className="py-6 bg-background border-none shadow-none rounded-3xl">
                            <CardContent className="px-6 space-y-5">
                                <div className="flex items-center justify-between">
                                    <Skeleton className="h-5 w-20" />
                                    <Skeleton className="h-9 w-20 rounded-full" />
                                </div>
                                <div className="space-y-6">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <Skeleton className="w-8 h-8 rounded-md shrink-0" />
                                            <div className="flex-1 space-y-1.5 min-w-0">
                                                <Skeleton className="h-4 w-36" />
                                                <Skeleton className="h-3 w-24" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        {/* Time tracker */}
                        <Card className="py-6 bg-linear-150 from-foreground to-green-800 rounded-3xl">
                            <CardContent className="px-6 flex flex-col gap-8 justify-between h-full">
                                <Skeleton className="h-5 w-28 bg-background/20" />
                                <Skeleton className="h-12 w-36 mx-auto bg-background/20" />
                                <div className="flex items-center gap-3 justify-center">
                                    <Skeleton className="h-10 w-10 rounded-full bg-background/20" />
                                    <Skeleton className="h-10 w-10 rounded-full bg-background/20" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Loader;