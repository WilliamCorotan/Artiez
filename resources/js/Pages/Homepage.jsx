import { Category } from "@/Components/Category";
import { Footer } from "@/Components/Footer";
import { Hero } from "@/Components/Hero";
import { Main } from "@/Components/Main";
import Navbar from "@/Components/Navbar";
import Layout from "@/Layouts/Layout";

export default function Homepage({auth, products}) {
    return (
        <>
            <Layout auth={auth} >
            <Hero />
            <Main artworks={products} />
            <Category />
            </Layout>
        </>
    );
}
