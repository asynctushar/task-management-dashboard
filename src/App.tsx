import { Suspense } from "react";
import { Outlet } from "react-router";
import ErrorBoundary from "./components/shared/ErrorBoundary";
import Loader from "./components/shared/Loader";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;