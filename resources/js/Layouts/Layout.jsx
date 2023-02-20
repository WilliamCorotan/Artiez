import { useState } from "react";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import { Footer } from "@/Components/Footer";

export default function Layout({ auth, header, children,  className}) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
        <Navbar auth={auth}/>
        <div className={`min-h-screen ${className}`}>
            <main>{children}</main>
        </div>
        <Footer/>
        </>
    );
}
