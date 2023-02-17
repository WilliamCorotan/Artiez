import { Link } from "@inertiajs/react";

export const Card = ({ artworks }) => {
    // console.log(props);
    return (
        <>
            <div className="mb-5 transition ease-in-out delay-15 hover:-translate-y-0.5 hover:scale-110 hover:bg-white duration-300 rounded-3xl shadow-lg border-2 max-w-sm">
                <Link
                    to="Homepage"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                >
                    <img
                        className="rounded-t-2xl"
                        src="assets/artwork/art3.avif"
                        alt="Artwork"
                    />
                </Link>
                <div className="p-5 table-fixed text-gray-800">
                    <h5 className="text-lg font-bold mb-2">
                        {artworks.product_name}
                    </h5>
                    <p className="text-xs text-gray-600 mb-2">
                        <span>{`${artworks.medium} on ${artworks.base}`}</span>
                        <span> | </span>
                        <span>{`${artworks.height}h x ${artworks.width}w in`}</span>
                    </p>
                    <div className="flex items-center justify-between">
                        <h6 className="text-md text-gray-700 font-bold mb-2">
                            {artworks.first_name} {artworks.last_name}
                        </h6>
                        <h4 className="font-bold text-red-800 text-xl">
                            PHP {artworks.price}
                        </h4>
                    </div>
                    <p className="text-sm text-gray-600">
                        <span>
                            <i className="fas fa-map-marker-alt fa-sm mt-[3px] mr-1"></i>
                            {artworks.city}, {artworks.province}
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};
