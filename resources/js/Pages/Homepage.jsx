import { Category } from "@/Components/Category";
import { Footer } from "@/Components/Footer";
import { Hero } from "@/Components/Hero";
import { Main } from "@/Components/Main";
import Navbar from "@/Components/Navbar";
import showArtworks from "./Profile/showArtworks";

export default function Homepage(props) {
    // console.log(props);
    return (
        <>
            <Navbar />
            <Hero />
            <Main artworks={props.products} />
            <showArtworks />
            <Category />
            <Footer />
        </>
    );
}
