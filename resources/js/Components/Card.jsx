import { Link } from "@inertiajs/react";

export const Card = ({ artworks }) => {
    const asset = (path) => `${window.location.origin}/${path}`;
    return (
        <>
            <div className="w-full mb-5 transition ease-in-out delay-15 hover:-translate-y-0.5 hover:scale-110 hover:bg-white duration-300 rounded-md shadow-lg border-2">
                <Link
                    href={`${window.location.origin}/artworks/${artworks.product_id}`}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                >
                    <div className="aspect-w-3 aspect-h-3">
                        <img
                            className="rounded-t-md  object-cover object-center"
                            src={asset(
                                `assets/artwork/${artworks.product_preview}`
                            )}
                            alt={artworks.product_name}
                        />
                    </div>

                    <div className="p-5 max-h-fit grid text-gray-800">
                        <h5 className="text-xl font-bold ">
                            {artworks.product_name}
                        </h5>
                        <p className="text-xs text-gray-400 mb-2">
                            <span>
                                {`${artworks.medium} on ${artworks.base},
                                ${artworks.height}h x ${artworks.width}w in`}
                            </span>
                        </p>
                        <div className="flex items-center justify-between">
                            <Link
                                href={`${window.location.origin}/artists/${artworks.artist_id}`}
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                <h6 className="text-md text-gray-600 font-bold">
                                    {artworks.first_name} {artworks.last_name}
                                </h6>
                            </Link>
                        </div>
                        <div className="text-sm text-gray-400 grid grid-flow-col">
                            <span className="self-end">
                                <i className="fas fa-map-marker-alt fa-sm mt-[3px] mr-1"></i>
                                {artworks.city}, {artworks.province}
                            </span>
                        </div>
                        <h4 className="font-bold text-rose-500 text-xl place-self-end">
                            PHP {artworks.price.toLocaleString("en-PH")}
                        </h4>
                    </div>
                </Link>
            </div>
        </>
    );
};
