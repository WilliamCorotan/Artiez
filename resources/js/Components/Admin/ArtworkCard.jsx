import { Link } from "@inertiajs/react";

export const ArtworkCard = ({ artworks, className }) => {
    const asset = (path) => `${window.location.origin}/${path}`;
    return (
        <>
            <div
                className={`w-full grid mb-5 transition ease-in-out delay-15 hover:-translate-y-0.5 hover:scale-110 hover:bg-white duration-300 rounded-md shadow-lg border-2 ${className}`}
            >
                <div className="h-64 rounded-t-md">
                    <img
                        className="rounded-t-md w-full h-96  object-cover object-center"
                        src={asset(
                            `assets/artwork/${artworks.product_preview}`
                        )}
                        alt={artworks.product_name}
                    />
                </div>

                <div className="p-5 h-28 grid text-gray-800">
                    <h5 className="text-lg font-bold mb-2">
                        {artworks.product_name}
                    </h5>
                    <div className="flex justify-between self-end">
                        <p className="text-xs text-gray-600">
                            <span>{`${artworks.medium} on ${artworks.base}`}</span>
                            <span> | </span>
                            <span>{`${artworks.height}h x ${artworks.width}w in`}</span>
                        </p>
                    </div>

                    <h4 className="font-bold text-rose-500 text-lg text-end">
                        PHP {artworks.price}
                    </h4>
                </div>
            </div>
        </>
    );
};
