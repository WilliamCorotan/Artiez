import { Link } from "@inertiajs/react";
import { ArtworkCard } from "./Admin/ArtworkCard";

const ArtistCard = ({ artist, artworks }) => {
    const asset = (path) => `${window.location.origin}/${path}`;
    console.log(asset(`/assets/profile_picture/${artist.profile_picture}`));
    return (
        <div className="w-full grid lg:grid-cols-3 gap-4 border-b-2 border-gray-200 py-6 ">
            {/* Artist Profile picture */}
            <div className=" grid lg:border-r-2 lg:border-rose-600 px-4 ">
                <div className=" aspect-3 grid place-items-center">
                    <img
                        src={asset(
                            `assets/profile_picture/${artist.profile_picture}`
                        )}
                        alt="Profile Picture"
                        className="w-32 h-32 object-cover rounded-full border-2"
                    />
                </div>
                {/* Artist card body */}
                <div className="place-self-end w-full">
                    <div className="md:px-8 py-2 grid place-content-center md:place-content-start lg:px-0 text-center md:text-left">
                        <span className="block mb-2 text-xl font-bold">
                            {artist.first_name} {artist.last_name}
                        </span>
                        <span className="block">
                            {artist.city}, {artist.province}
                        </span>
                    </div>
                    <div className="self-end cursor-pointer py-4 mt-6 hover:bg-gray-700 focus:ring  focus:ring-offset-2 focus:ring-gray-800 w-3/5 lg:w-full mx-auto bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center">
                        <Link href="" className="">
                            Visit Profile
                        </Link>
                    </div>
                </div>
            </div>
            {/* Featured artworks */}

            {artworks.map((item) => {
                return (
                    <Link
                        href={`${window.location.origin}/artworks/${item.product_id}`}
                        className="col-span-1"
                    >
                        <ArtworkCard key={item.product_id} artworks={item} />
                    </Link>
                );
            })}
        </div>
    );
};

export default ArtistCard;
