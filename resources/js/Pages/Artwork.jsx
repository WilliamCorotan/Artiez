import React from "react";
import Layout from "@/Layouts/Layout";
import { Card } from "@/Components/Card";

function Artwork({ auth, artwork, artist, artworks }) {
    const asset = (path) => `${window.location.origin}/${path}`;

    const ArtworkCards = artworks.slice(0, 3).map((e) => {
        return <Card key={e.artwork_id} artworks={e} />;
    });

    return (
        <Layout auth={auth} className="">
            <section className="mx-auto container bg-slate-50 p-5">
                <div className=" h-12 my-10 text-5xl">
                    {artwork.product_name}
                </div>
                <div className=" flex flex-col md:flex-row gap-5">
                    <div className=" sm:w-1/2">
                        <img
                            src={asset(
                                `assets/artwork/${artwork.product_preview}`
                            )}
                            alt=""
                            className=" h-full max-w-screen"
                        />
                    </div>
                    <article className="">
                        <div className=" text-3xl py-5">
                            {`${artist[0].first_name}
                            ${artist[0].last_name}`}
                        </div>
                        <div className=" text-2xl py-2">
                            {artwork.description}
                        </div>
                        <div className=" text-xl py-2">{artwork.medium}</div>
                        <div className=" text-3xl text-rose-600 mt-32 ">
                            Price:
                            {artwork.price}
                        </div>
                    </article>
                </div>
            </section>
            <section className="mx-auto container bg-slate-50">
                <div className=" text-2xl p-2">
                    More artworks from{" "}
                    <span className=" text-red-600">{`${artist[0].first_name}
                            ${artist[0].last_name}`}</span>
                </div>
                <div className="grid grid-cols-1 w-4/5 gap-x-8 gap-y-6 mx-auto place-items-center sm:grid-cols-2 lg:grid-cols-3 mb-20 justify-center">
                    {ArtworkCards}
                </div>
            </section>
        </Layout>
    );
}

export default Artwork;
