import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error("ErrorBoundary caught:", error, errorInfo);
    }

    handleReset = (): void => {
        this.setState({ hasError: false, error: null });
        window.location.href = "/";
    };

    render(): ReactNode {
        if (this.state.hasError) {
            return (
                <div className="min-h-svh flex items-center justify-center p-6 bg-background">
                    <div className="w-full max-w-md rounded-lg border border-border bg-card text-card-foreground shadow-lg px-8 py-11 text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-300">
                        <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 ring-8 ring-destructive/5">
                            <AlertTriangle className="h-9 w-9 text-destructive" />
                        </div>

                        <h2 className="mb-2 text-xl font-semibold tracking-tight text-foreground">
                            Something Went Wrong
                        </h2>
                        <p className="mb-7 text-sm leading-relaxed text-muted-foreground">
                            An unexpected error occurred. Please try again or return home.
                        </p>

                        {import.meta.env.DEV && this.state.error && (
                            <details className="mb-6 cursor-pointer text-left text-xs text-muted-foreground">
                                <summary className="mb-2">Error details (dev only)</summary>
                                <pre className="max-h-36 overflow-auto rounded-md bg-muted p-3 whitespace-pre-wrap break-all">
                                    {this.state.error.toString()}
                                </pre>
                            </details>
                        )}

                        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
                            <Button variant="outline" onClick={() => window.location.reload()}>
                                <RefreshCw className="mr-2 h-4 w-4" />
                                Refresh
                            </Button>
                            <Button onClick={this.handleReset}>
                                <Home className="mr-2 h-4 w-4" />
                                Go Home
                            </Button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;