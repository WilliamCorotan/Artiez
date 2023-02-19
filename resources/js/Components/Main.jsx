import { Card } from "@/Components/Card";
import { Link } from "@inertiajs/react";

export const Main = (props) => {
    const ArtworkCards = props.artworks.slice(0, 6).map((e) => {
        // console.log(<Card artworks={e} />);
        return <Card key={e.product_id} artworks={e} />;
    });

    // console.log(ArtworkCards);
    console.log(props);
    return (
        <>
            <div className="text-center my-10">
                <h1 className="font-semibold text-gray-500 text-2xl md:text-3xl">
                    Latest Artwork
                </h1>
            </div>
            <div className="grid grid-cols-1 w-fit gap-x-8 gap-y-6 mx-auto sm:grid-cols-2 md:grid-cols-3 mb-20 justify-center">
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
