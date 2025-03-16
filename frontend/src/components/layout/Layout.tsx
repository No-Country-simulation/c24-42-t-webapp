import { Outlet } from "react-router";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import { useSession } from "@hooks/useSession";

export const Layout = () => {
    useSession();
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}