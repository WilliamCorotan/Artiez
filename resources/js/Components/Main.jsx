import { Card } from "@/Components/Card";
import { Link } from "@inertiajs/react";

export const Main = (props) => {
    const ArtworkCards = props.artworks.slice(0, 6).map((e) => {
        // console.log(<Card artworks={e} />);
        return <Card key={e.product_id} artworks={e} />;
    });
    // console.log(ArtworkCards);
    return (
        <>
            <div className="text-center my-10">
                <h1 className="font-semibold text-gray-500 text-lg md:text-3xl">
                    Latest Artwork
                </h1>
            </div>
            <div className="flex flex-wrap flex-col-4 mb-20 justify-center xs:flex-col gap-6">
                {ArtworkCards}
            </div>

            <Link to="#">
                <div className="mx-auto mb-20 max-w-fit px-4 py-2 hover:border-red-800 border-2 rounded-lg hover:text-red-800 text-gray-900 border-gray-900">
                    View All Artworks
                </div>
            </Link>
        </>
    );
};
