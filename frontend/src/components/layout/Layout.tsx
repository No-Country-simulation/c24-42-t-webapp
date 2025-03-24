import { Outlet } from "react-router";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import { useSession } from "@hooks/useSession";
import ErrorBoundary from "./ErrorBoundary";
import { ErrorMessage } from "./ErrorMessage";

export const Layout = () => {
    useSession();
    return (
        <>
            <Navbar />
            <main style={{ minHeight: "calc(100vh - 80px)"}}>
                <ErrorBoundary fallback={<ErrorMessage />}>
                    <Outlet />
                </ErrorBoundary>
            </main >
            <Footer />
        </>
    );
}