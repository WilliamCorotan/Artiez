import { Category } from "@/Components/Category";
import { Footer } from "@/Components/Footer";
import { Hero } from "@/Components/Hero";
import { Main } from "@/Components/Main";
import Navbar from "@/Components/Navbar";

export default function Homepage(props) {
    console.log(props.products);
    return (
        <>
            <Navbar />
            <Hero />
            <Main artworks={props.products} />
            <Category />
            <Footer />
        </>
    );
}
