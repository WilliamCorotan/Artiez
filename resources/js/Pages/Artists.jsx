import Layout from "@/Layouts/Layout";
import { RiArtboardLine } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";
import { Card } from "@/Components/Card";
import { ArtworkCard } from "@/Components/Admin/ArtworkCard";
import Pagination from "@/Components/Pagination";

const Artists = ({ auth, artist, artworks }) => {
    const asset = (path) => `${window.location.origin}/${path}`;
    const date = new Date(artist.created_at);
    console.log(artworks);
    const ArtworkCards = artworks.data.map((e) => {
        return <ArtworkCard key={e.artwork_id} artworks={e} />;
    });
    return (
        <>
            <Layout auth={auth}>
                <section className="w-4/5 mt-10 mx-auto container">
                    <div className="p-5">
                        <h1 className="text-2xl text-bold">
                            {artist.first_name} {artist.last_name}
                        </h1>
                        <p className="text-gray-600 mb-4">
                            <i className="fas fa-location-dot"></i>{" "}
                            {artist.city} {artist.province}
                        </p>
                    </div>

                    <div className="w-full h-fit grid grid-cols-1 md:grid-cols-3">
                        <div className="col-span-1 w-full h-full bg-slate-100 p-3 text-gray-600">
                            <div className="flex flex-col lg:flex-row w-full place-items-center px-3 py-5">
                                <img
                                    className="w-48 h-48 object-cover object-center"
                                    src={asset(
                                        `assets/profile_picture/${artist.profile_picture}`
                                    )}
                                    alt=""
                                />
                                <div className="mt-4 ml-3 w-full">
                                    <p className="flex">
                                        {/* Insert icon */}
                                        <RiArtboardLine size={20} /> 1 Artwork
                                        for sale
                                    </p>
                                    <p className="pt-4">
                                        <FaUserCheck
                                            size={20}
                                            className="inline"
                                        />{" "}
                                        Member since{" "}
                                        {date.toLocaleDateString("en", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </p>
                                </div>
                            </div>
                            <div className="uppercase px-3">
                                <a href="#">Follow Artist</a>
                            </div>
                        </div>
                        <div className="col-span-2 h-fit w-full p-5 text-gray-600">
                            <img src="assets/hero-bg.avif" alt="" />
                            <p className="text-justify leading-relaxed">
                                {artist.description}
                            </p>
                        </div>
                    </div>
                    {/* Latest */}
                    <div className="">
                        <div className=" text-2xl p-2">
                            More artworks from{" "}
                            <span className=" text-rose-600">{`${artist.first_name}
                            ${artist.last_name}`}</span>
                        </div>
                        <div className="grid grid-cols-1 w-4/5 lg:w-11/12 gap-x-8 gap-y-6 mx-auto place-items-center sm:grid-cols-2 lg:grid-cols-4 mb-20 justify-center">
                            {ArtworkCards}
                        </div>
                    </div>
                    <div>
                        <Pagination links={artworks.links} />
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Artists;
