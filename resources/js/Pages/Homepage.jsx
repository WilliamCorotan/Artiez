import { Category } from "@/Components/Category";
import { Faqs } from "@/Components/Faqs";
import { Hero } from "@/Components/Hero";
import { Main } from "@/Components/Main";
import Layout from "@/Layouts/Layout";
export default function Homepage({ auth, products }) {
    return (
        <>
            <Layout auth={auth}>
                <Hero />
                <Main artworks={products} />
                <Category />
                <Faqs />
            </Layout>
        </>
    );
}
