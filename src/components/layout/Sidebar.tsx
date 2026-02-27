import { Calendar, ChartNoAxesCombined, HelpCircle, LogOut, LucideLayoutDashboard, Settings, Users, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useCallback } from "react";
import { Link, useLocation } from "react-router";
import { useAuth } from "@/context/auth/useAuth";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface BaseItem {
    label: string;
    icon: React.ElementType;
    type: "page" | "button";
}

interface LinkItem extends BaseItem {
    href: string;
    handler?: never;
    type: "page";
}

interface HandlerItem extends BaseItem {
    href?: never;
    handler: () => void | Promise<void>;
    type: "button";
}

type NavItem = LinkItem | HandlerItem;


interface SidebarProps {
    onNavigate?: () => void;
}

const Sidebar = ({ onNavigate }: SidebarProps) => {
    const location = useLocation();
    const pathname = location.pathname;
    const { logout } = useAuth();


    const handleLogout = useCallback(() => {
        logout();
    }, []);

    const menuItems: NavItem[] = [
        { href: "/", label: "Dashboard", icon: LucideLayoutDashboard, type: "page" },
        { href: "/tasks", label: "Tasks", icon: Workflow, type: "page" },
        { href: "/calender", label: "Calender", icon: Calendar, type: "page" },
        { href: "/analytics", label: "Analytics", icon: ChartNoAxesCombined, type: "page" },
        { href: "/teams", label: "Team", icon: Users, type: "page" },
    ];

    const generalItems: NavItem[] = [
        { href: "/settings", label: "Setting", icon: Settings, type: "page" },
        { href: "/help", label: "Help", icon: HelpCircle, type: "page" },
        { handler: handleLogout, label: "Logout", icon: LogOut, type: "button" },
    ];



    return (
        <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground lg:gap-8 gap-4 py-8 overflow-auto">
            {/* Logo */}
            <div className="flex items-center gap-3 px-8">
                <div className="flex h-8 w-8 items-center justify-center gap-3 rounded-lg">
                    <img
                        src="/apple-touch-icon.png"
                        alt="Carlux Logo"
                        width={32}
                        height={32}
                        className="rounded"
                    />
                </div>
                <span className="text-base font-semibold tracking-tight text-sidebar-foreground">
                    Donezo
                </span>
            </div>


            {/* Menu Navigation */}
            <div className="py-5">
                <div className="px-8 text-muted-foreground uppercase text-xs font-medium">
                    Menu
                </div>
                <nav className="flex-1 space-y-0.5 py-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;

                        return item.type === "page" ? (
                            <div key={item.href}
                                className="relative flex items-center h-10"
                            >
                                <div className={cn("h-full w-2 bg-primary absolute left-0 rounded-r-lg", isActive ? "visible" : "invisible")}></div>
                                <Link
                                    to={item.href ?? ""}
                                    onClick={onNavigate}
                                    className={cn("h-full flex items-center gap-3 ml-8 font-base hover:text-sidebar-foreground/90 transition-all duration-300", isActive ? "text-foreground" : "text-muted-foreground")}
                                >
                                    <item.icon
                                        className={cn(
                                            "h-5 w-5 shrink-0 hover:text-sidebar-foreground transition-all duration-300", isActive ? "text-primary" : ""
                                        )}
                                    />
                                    {item.label}
                                </Link>
                            </div>
                        ) : (
                            <div key={item.href}
                                className="flex items-center h-10"
                            >
                                <button
                                    onClick={() => {
                                        item.handler();
                                        if (onNavigate) {
                                            onNavigate();
                                        }

                                    }}
                                    className={cn("h-full flex items-center justify-start ml-8 gap-3 font-base text-muted-foreground cursor-pointer hover:text-sidebar-foreground/90 transition-all duration-300")}
                                >
                                    <item.icon
                                        className={cn(
                                            "h-5 w-5 shrink-0 transition-all duration-300"
                                        )}
                                    />
                                    {item.label}
                                </button>
                            </div>
                        );
                    })}
                </nav>
            </div>

            {/* General Navigation */}
            <div className="py-5">
                <div className="px-8 text-muted-foreground uppercase text-xs font-medium">
                    General
                </div>
                <nav className="flex-1 space-y-0.5 py-2">
                    {generalItems.map((item) => {
                        const isActive = pathname === item.href;

                        return item.type === "page" ? (
                            <div key={item.href}
                                className="relative flex items-center h-10"
                            >
                                <div className={cn("h-full w-2 bg-primary absolute left-0 rounded-r-lg", isActive ? "visible" : "invisible")}></div>
                                <Link
                                    to={item.href ?? ""}
                                    onClick={onNavigate}
                                    className={cn("h-full flex items-center gap-3 ml-8 font-base hover:text-sidebar-foreground/90 transition-all duration-300", isActive ? "text-foreground" : "text-muted-foreground")}
                                >
                                    <item.icon
                                        className={cn(
                                            "h-5 w-5 shrink-0 hover:text-sidebar-foreground transition-all duration-300", isActive ? "text-primary" : ""
                                        )}
                                    />
                                    {item.label}
                                </Link>
                            </div>
                        ) : (
                            <div key={item.href}
                                className="flex items-center h-10"
                            >
                                <button
                                    onClick={() => {
                                        item.handler();
                                        if (onNavigate) {
                                            onNavigate();
                                        }

                                    }}
                                    className={cn("h-full flex items-center justify-start ml-8 gap-3 font-base text-muted-foreground cursor-pointer hover:text-sidebar-foreground/90 transition-all duration-300")}
                                >
                                    <item.icon
                                        className={cn(
                                            "h-5 w-5 shrink-0 transition-all duration-300"
                                        )}
                                    />
                                    {item.label}
                                </button>
                            </div>
                        );
                    })}
                </nav>
            </div>

            {/* download card */}
            <div className="mt-auto px-6 hidden sm:block">
                <Card className="py-4 bg-linear-150 from-foreground to-green-800">
                    <CardContent className="px-4 text-background/90 space-y-1">
                        <div className="flex h-8 w-8 items-center justify-center gap-3 rounded-lg">
                            <img
                                src="/apple-touch-icon.png"
                                alt="Carlux Logo"
                                width={24}
                                height={24}
                                className="rounded"
                            />
                        </div>
                        <h2 className="leading-tight text-lg">
                            <strong className="font-medium">
                                Download
                            </strong>
                            {" "} our <br />
                            Mobile App
                        </h2>
                        <p className="text-xs text-background/80">
                            Get easy in another way
                        </p>
                        <Button variant="default" className="mt-10 w-full z-50 rounded-full" size="lg">Download</Button>
                    </CardContent>
                </Card>
            </div>


        </div>
    );
};

export default React.memo(Sidebar);