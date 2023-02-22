import { Link } from "@inertiajs/react";

const ArtistCard = ({ artist }) => {
    return (
        <div className="w-full grid md:grid-flow-col lg:grid-cols-5 gap-4 border-b-2 border-gray-200 py-6">
            {/* Artist Profile picture */}
            <div className="w-40 grid place-items-center place-self-center">
                <img
                    src={artist.profile_picture}
                    alt=""
                    className="w-32 h-32 rounded-full border-2"
                />
            </div>
            {/* Artist card body */}
            <div className="">
                <div className="md:px-8 py-2 grid place-content-center md:place-content-start lg:px-0 text-center md:text-left">
                    <span className="block mb-2 text-xl font-bold">
                        {artist.first_name} {artist.last_name}
                    </span>
                    <span className="block">
                        {artist.city}, {artist.province}
                    </span>
                </div>
                <div className="cursor-pointer py-4 mt-6 hover:bg-gray-700 focus:ring  focus:ring-offset-2 focus:ring-gray-800 w-3/5 lg:w-full mx-auto bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center">
                    <Link href="" className="">
                        Visit Profile
                    </Link>
                </div>
            </div>
            {/* Featured artworks */}
        </div>
    );
};

export default ArtistCard;
