import Navbar from "@/Components/Navbar";
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head, router } from '@inertiajs/react';
import { Footer } from "@/Components/Footer";
import { Hero } from "@/Components/Hero";
import { Main } from "@/Components/Main";
// import GuestLayout from "@/Layouts/GuestLayout";
import { Test } from "@/Components/test";
import { Link } from "@inertiajs/react";

export default function Homepage(props) {
    // console.log(props);
    return (
        <>
            <Navbar />
            <Hero />
            <Main artworks={props.products} />
            {/* <Test /> */}
            <Footer />
        </>
    );
}
