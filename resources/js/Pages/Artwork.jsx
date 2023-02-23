import React from "react";
import Layout from "@/Layouts/Layout";
import { Card } from "@/Components/Card";

function Artwork({ auth, artworks, artwork }) {
    const asset = (path) => `${window.location.origin}/${path}`;

    const ArtworkCards = artworks.slice(0, 4).map((e) => {
        return <Card key={e.artwork_id} artworks={e} />;
    });
    const artworkDetails = artwork[0];
    const price = artworkDetails.price;
    console.log(price.toLocaleString("en-US"));
    return (
        <Layout auth={auth} className="">
            <section className="mx-auto container bg-slate-50 p-5">
                <div className="px-8 h-12 my-10 text-center uppercase lg:text-left text-4xl lg:text-5xl">
                    {artworkDetails.product_name}
                </div>
                <div className="grid lg:grid-flow-col ">
                    <div className="aspect-w-3 aspect-h-4 md:aspect-w-4">
                        <img
                            src={asset(
                                `assets/artwork/${artworkDetails.product_preview}`
                            )}
                            alt=""
                            className="h-full object-cover border-double border-2 border-stone-500 p-1"
                        />
                    </div>
                    <article className="grid   border-2 border-stone-400 p-4">
                        {/* Artwork description */}
                        <div className="row-span-6 text-3xl border-b-2 border-stone-500">
                            <p className="font-semibold">About the Artwork </p>

                            <p className="text-2xl px-4">
                                {artworkDetails.description}
                            </p>
                        </div>
                        <div className="grid">
                            {/* Artist */}
                            <div className="text-xl py-5">
                                <span className="font-semibold">Artist: </span>
                                {`${artworkDetails.first_name}
                            ${artworkDetails.last_name}`}
                            </div>
                            {/* Medium */}
                            <div className=" text-xl py-2">
                                <span className="font-semibold">Medium: </span>
                                {artworkDetails.medium}
                            </div>
                            {/* Base */}
                            <div className="text-xl py-2">
                                <span className="font-semibold">Base: </span>
                                {artworkDetails.base}
                            </div>
                            {/* Art style */}
                            <div className="text-xl py-2">
                                <span className="font-semibold">
                                    Art Style:{" "}
                                </span>
                                {artworkDetails.art_style}
                            </div>
                            {/* Dimensions */}
                            <div className="text-xl py-2">
                                <span className="font-semibold">
                                    Dimensions:{" "}
                                </span>
                                {`${artworkDetails.height}h x
                                ${artworkDetails.width}w in`}
                            </div>
                            <div className="text-3xl text-rose-600 place-self-end">
                                PHP {price.toLocaleString("en-PH")}
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <section className="mx-auto container bg-slate-50">
                <div className=" text-2xl p-2">
                    More artworks from{" "}
                    <span className=" text-rose-600">{`${artworkDetails.first_name}
                            ${artworkDetails.last_name}`}</span>
                </div>
                <div className="grid grid-cols-1 w-4/5 lg:w-11/12 gap-x-8 gap-y-6 mx-auto place-items-center sm:grid-cols-2 lg:grid-cols-4 mb-20 justify-center">
                    {ArtworkCards}
                </div>
            </section>
        </Layout>
    );
}

export default Artwork;
