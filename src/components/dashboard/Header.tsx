import { useAuth } from "@/context/auth/useAuth";
import { Button } from "../ui/button";
import { Bell, Mail, Search } from "lucide-react";
import Profile from "@/assets/Profile.png";
import { Input } from "../ui/input";

const Header = () => {
    const { user } = useAuth();
    return (
        <header className="bg-sidebar p-4 sm:p-6 rounded-lg space-y-3 sm:space-y-0">
            <div className="flex items-center justify-between gap-3">
                <div className="hidden sm:flex items-center bg-background px-3 py-1 rounded-full focus-within:ring focus-within:ring-border/90 w-84">
                    <Search className="w-5 h-5 shrink-0" />
                    <Input
                        placeholder="Search task"
                        className="focus-visible:border-0 focus-visible:ring-0 border-0 shadow-none placeholder:text-base flex-1 min-w-0"
                    />
                </div>

                {/* Right side */}
                <div className="flex items-center gap-2 sm:gap-4 ml-auto">
                    <Button size="icon" variant="outline" className="border border-transparent hover:border-primary hover:bg-background/80 hover:text-primary transition-all duration-300 rounded-4xl">
                        <Mail className="w-5 h-5 transition-all duration-300" />
                    </Button>
                    <Button size="icon" variant="outline" className="border border-transparent hover:border-primary hover:bg-background/80 hover:text-primary transition-all duration-300 rounded-4xl">
                        <Bell className="w-5 h-5 transition-all duration-300" />
                    </Button>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full bg-chart-4 p-1 shrink-0">
                            <img src={Profile} alt="User Profile" className="w-full h-full object-contain" />
                        </div>
                        <div className="hidden sm:block min-w-0">
                            <h3 className="font-medium text-base truncate">{"Totok Michael"}</h3>
                            <h5 className="text-muted-foreground leading-tight truncate text-sm">{user?.email}</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search on second row — mobile only */}
            <div className="sm:hidden flex items-center bg-background px-3 py-1 rounded-full focus-within:ring focus-within:ring-border/90">
                <Search className="w-5 h-5 shrink-0" />
                <Input
                    placeholder="Search task"
                    className="focus-visible:border-0 focus-visible:ring-0 border-0 shadow-none placeholder:text-base flex-1 min-w-0"
                />
            </div>
        </header>
    );
};

export default Header;