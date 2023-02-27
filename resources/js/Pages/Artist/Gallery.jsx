import ArtistLayout from "@/Layouts/ArtistLayout";
import { Head } from "@inertiajs/react";
import { ArtworkCard } from "../../Components/Admin/ArtworkCard";

const Gallery = ({ auth, artworks }) => {
    let soldArtworks = 0;
    artworks.forEach((item) => {
        soldArtworks = item.sold ? soldArtworks + 1 : soldArtworks;
    });
    return (
        <>
            <Head title="Dashboard" />
            <ArtistLayout auth={auth}>
                <h1 className="text-center text-2xl lg:text-4xl py-4">
                    {" "}
                    Latest Artworks{" "}
                </h1>
                <div className="grid lg:grid-cols-6 gap-8 py-30 w-4/5 mx-auto mb-8">
                    {artworks.map((item) => {
                        return (
                            <ArtworkCard
                                key={item.product_id}
                                artworks={item}
                                className="lg:col-span-3"
                            />
                        );
                    })}
                </div>
            </ArtistLayout>
        </>
    );
};

export default Gallery;
