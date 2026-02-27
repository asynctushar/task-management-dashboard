import { Link } from "react-router";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Temporary = () => {

    return (
        <div className="min-h-[85vh] flex items-center justify-center p-6 bg-background">
            <div className="w-full max-w-md rounded-lg border border-border bg-card text-card-foreground shadow-lg px-8 py-11 text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-300">
                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-8 ring-primary/5">
                    <span className="text-3xl" aria-hidden>
                        🔍
                    </span>
                </div>

                <h1 className="mb-2 text-xl font-semibold tracking-tight text-foreground">
                    Page is under development
                </h1>
                <p className="mb-7 text-sm leading-relaxed text-muted-foreground">
                    The page you're looking for is under development. We will update the page soon.
                </p>

                <Button asChild>
                    <Link to="/">
                        <Home className="mr-2 h-4 w-4" />
                        Go to Dashboard
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default Temporary;