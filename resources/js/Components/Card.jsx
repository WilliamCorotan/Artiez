import { Link } from "@inertiajs/react";

export const Card = ({ artworks }) => {
    // console.log(props);
    return (
        <>
            <div className="transition ease-in-out delay-15 hover:-translate-y-0.5 hover:scale-110 hover:bg-white duration-300 rounded-3xl shadow-lg border-2 max-w-sm">
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
                <div className="p-4 table-fixed">
                    <h5 className="text-gray-800 text-xl font-semibold">
                        {artworks.product_name}
                    </h5>
                    <p className="text-gray-700 text-base mb-2">
                        <span>{`${artworks.medium} on ${artworks.base}`}</span>
                        <span> | </span>
                        <span>{`${artworks.height}h x ${artworks.width}w in`}</span>
                    </p>
                    <div className="flex items-center justify-between">
                        <h6 className="text-gray-800 text-lg font-medium mb-2">
                            {artworks.first_name} {artworks.last_name}
                        </h6>
                        <h4 className="font-semibold">PHP {artworks.price}</h4>
                    </div>
                    <p className="text-gray-700">
                        <span>
                            {artworks.city}, {artworks.province}
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};
