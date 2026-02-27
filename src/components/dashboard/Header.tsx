import { useAuth } from "@/context/auth/useAuth";
import { Button } from "../ui/button";
import { Bell, Mail, Search } from "lucide-react";
import Profile from "@/assets/profile.png";
import { Input } from "../ui/input";

const Header = () => {
    const { user } = useAuth();
    return (
        <header className="flex items-center justify-between bg-sidebar p-6 rounded-lg">
            <div className="flex items-center bg-background px-3 py-1 rounded-full focus-within:ring focus-within:ring-border/90 w-84">
                <Search className="w-5 h-5" />
                <Input placeholder="Search task" className="focus-visible:border-0 focus-visible:ring-0 border-0 shadow-none placeholder:text-base flex-1" />
            </div>
            <div className="flex items-center justify-between gap-4">
                <Button size="icon" variant="outline" className="border border-transparent hover:border-primary hover:bg-background/80 hover:text-primary transition-all duration-300 rounded-4xl">
                    <Mail className="w-5 h-5 transition-all  duration-300" />
                </Button>
                <Button size="icon" variant="outline" className="border border-transparent hover:border-primary hover:bg-background/80 hover:text-primary transition-all duration-300 rounded-4xl">
                    <Bell className="w-5 h-5 transition-all  duration-300" />
                </Button>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 overflow-hidden rounded-full bg-chart-4 p-1">
                        <img src={Profile} alt="User Profile" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="">
                        <h3 className="font-medium text-base">{"Totok Michael"}</h3>
                        <h5 className="text-muted-foreground leading-tight">{user?.email}</h5>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;