import { Link } from "@inertiajs/react";

export const ArtworkCard = ({ artworks, className }) => {
    const asset = (path) => `${window.location.origin}/${path}`;
    return (
        <div
            className={`w-full h-full grid mb-5 transition ease-in-out delay-15 hover:-translate-y-0.5 hover:scale-110 hover:bg-white duration-300 rounded-md shadow-lg border-2 ${className}`}
        >
            <Link href={`artworks/edit/${artworks.product_id}`}>
                <div className="w-full aspect-w-3 aspect-h-3 rounded-t-md">
                    <img
                        className="rounded-t-md w-full object-cover object-center"
                        src={asset(
                            `assets/artwork/${artworks.product_preview}`
                        )}
                        alt={artworks.product_name}
                    />
                </div>

                <div className="p-2 self-end h-fit grid text-gray-900 bg-slate-50/60 ">
                    <h5 className="text-lg font-bold mb-2">
                        {artworks.product_name}
                    </h5>
                    <div className="flex justify-between self-end">
                        <p className="text-xs text-gray-800">
                            <span>{`${artworks.medium} on ${artworks.base}`}</span>
                            <span> | </span>
                            <span>{`${artworks.height}h x ${artworks.width}w in`}</span>
                        </p>
                    </div>

                    <h4 className="font-bold text-rose-500 text-lg text-end">
                        PHP {artworks.price.toLocaleString("en-PH")}
                    </h4>
                </div>
            </Link>
        </div>
    );
};
