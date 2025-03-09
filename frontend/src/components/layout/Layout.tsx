import { Outlet } from "react-router";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import { Toaster } from 'sonner';

export const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Toaster duration={5000}/>
            <Footer />
        </>
    );
}