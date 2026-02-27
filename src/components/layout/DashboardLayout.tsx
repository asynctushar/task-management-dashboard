import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Outlet } from "react-router";


const DashboardLayout = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const closeMobile = () => setMobileOpen(false);

    return (
        <div className="flex h-screen overflow-hidden bg-background lg:p-4" >
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-72 shrink-0 flex-col bg-sidebar rounded-lg overflow-hidden">
                <Sidebar />
            </aside>

            {/* Mobile Sidebar Drawer */}
            < Sheet open={mobileOpen} onOpenChange={setMobileOpen} >
                <SheetContent side="left" className="p-0 w-72 bg-sidebar border-r border-sidebar-border">
                    <Sidebar onNavigate={closeMobile} />
                </SheetContent>
            </Sheet >

            {/* Main Content Area */}
            < div className="flex flex-1 flex-col overflow-hidden" >
                <DashboardNavbar onMenuClick={() => setMobileOpen(true)} />
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-background">
                    <Outlet />
                </main>
            </div >
        </div >
    );
};

export default React.memo(DashboardLayout);