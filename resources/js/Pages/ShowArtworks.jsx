import React, { useState } from "react";
import Layout from "@/Layouts/Layout";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import { Card } from "@/Components/Card";
import { Radio } from "@material-tailwind/react";
import Pagination from "@/Components/Pagination";

function ShowArtworks({ auth, artworks }) {
    const [showFilters, setShowfilters] = useState(false);
    const { data, setData, get, processing, errors, reset } = useForm({
        medium: "",
        base: "",
        art_style: "",
    });

    const handleMediumFilter = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleBaseFilter = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleArtStyleFilter = (e) => {
        setData(e.target.name, e.target.value);
    };
    // console.log(medium);

    const applyFilters = (e) => {
        e.preventDefault();
        get("/artworks", data);
    };
    console.log(artworks);
    const ArtworkCards = artworks.data.map((e) => {
        // console.log(<Card artworks={e} />);
        return <Card key={e.product_id} artworks={e} />;
    });

    return (
        <Layout auth={auth} className={`py-8 w-4/5 mx-auto`}>
            <div className="2xl:container 2xl:mx-auto">
                <div className=" md:py-12 lg:px-20 md:px-6 py-9 px-4">
                    <div className=" flex justify-between items-center mb-4">
                        <h2 className=" lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
                            Artworks
                        </h2>

                        {/*  filters Button (md and plus Screen) */}
                        <button
                            onClick={() => setShowfilters(!showFilters)}
                            className=" cursor-pointer sm:flex hidden hover:bg-gray-700 focus:ring  focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 text-base leading-4 font-normal text-white justify-center items-center "
                        >
                            <svg
                                className=" mr-2"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6 4V8"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6 12V20"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 4V14"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 18V20"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18 4V5"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18 9V20"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Filters
                        </button>
                    </div>
                    <p className=" text-xl leading-5 text-gray-600 font-medium">
                        {artworks.total == 1
                            ? `1 artwork`
                            : `${artworks.total} artworks`}
                    </p>

                    {/* Filters Button (Small Screen)  */}

                    <button
                        onClick={() => setShowfilters(!showFilters)}
                        className="cursor-pointer mt-6 sm:hidden hover:bg-gray-700 focus:ring  focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center"
                    >
                        <svg
                            className=" mr-2"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6 4V8"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6 12V20"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 4V14"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 18V20"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18 4V5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18 9V20"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Filters
                    </button>
                </div>

                <div
                    id="filterSection"
                    className={
                        "relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 w-full " +
                        (showFilters ? "block" : "hidden")
                    }
                >
                    {/* Filters Section */}
                    <div className="grid w-full gap-4">
                        {/* Medium filter */}
                        <div className=" flex space-x-2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19 3H15C14.4696 3 13.9609 3.21071 13.5858 3.58579C13.2107 3.96086 13 4.46957 13 5V17C13 18.0609 13.4214 19.0783 14.1716 19.8284C14.9217 20.5786 15.9391 21 17 21C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.9994 7.35022L10.9994 5.35022C10.6243 4.97528 10.1157 4.76465 9.58539 4.76465C9.05506 4.76465 8.54644 4.97528 8.17139 5.35022L5.34339 8.17822C4.96844 8.55328 4.75781 9.06189 4.75781 9.59222C4.75781 10.1225 4.96844 10.6312 5.34339 11.0062L14.3434 20.0062"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.3 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H17"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17 17V17.01"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                                Medium
                            </p>
                        </div>
                        <div>
                            <Radio
                                label={`Acrylic`}
                                id="Acrylic"
                                name="medium"
                                color="red"
                                value={`Acrylic`}
                                onChange={handleMediumFilter}
                            />

                            <Radio
                                label={`Charcoal`}
                                id="Charcoal"
                                name="medium"
                                color="red"
                                value={`Charcoal`}
                                onChange={handleMediumFilter}
                            />
                            <Radio
                                label={`Digital`}
                                id="Digital"
                                name="medium"
                                color="red"
                                value={`Digital`}
                                onChange={handleMediumFilter}
                            />
                            <Radio
                                label={`Oil`}
                                id="Oil"
                                name="medium"
                                color="red"
                                value={`Oil`}
                                onChange={handleMediumFilter}
                            />
                            <Radio
                                label={`Watercolor`}
                                id="Watercolor"
                                name="medium"
                                color="red"
                                value={`Watercolor`}
                                onChange={handleMediumFilter}
                            />
                            <Radio
                                label={`Graphite`}
                                id="Graphite"
                                name="medium"
                                color="red"
                                value={`Graphite`}
                                onChange={handleMediumFilter}
                            />
                            <Radio
                                label={`Ink`}
                                id="Ink"
                                name="medium"
                                color="red"
                                value={`Ink`}
                                onChange={handleMediumFilter}
                            />
                            <Radio
                                label={`Pastel`}
                                id="Pastel"
                                name="medium"
                                color="red"
                                value={`Pastel`}
                                onChange={handleMediumFilter}
                            />
                            <Radio
                                label={`Pencil`}
                                id="Pencil"
                                name="medium"
                                color="red"
                                value={`Pencil`}
                                onChange={handleMediumFilter}
                            />
                            <Radio
                                label={`Others`}
                                id="Others"
                                name="medium"
                                color="red"
                                value={`Others`}
                                onChange={handleMediumFilter}
                            />
                        </div>

                        <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

                        {/* Base filter */}
                        <div className=" flex space-x-2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19 3H15C14.4696 3 13.9609 3.21071 13.5858 3.58579C13.2107 3.96086 13 4.46957 13 5V17C13 18.0609 13.4214 19.0783 14.1716 19.8284C14.9217 20.5786 15.9391 21 17 21C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.9994 7.35022L10.9994 5.35022C10.6243 4.97528 10.1157 4.76465 9.58539 4.76465C9.05506 4.76465 8.54644 4.97528 8.17139 5.35022L5.34339 8.17822C4.96844 8.55328 4.75781 9.06189 4.75781 9.59222C4.75781 10.1225 4.96844 10.6312 5.34339 11.0062L14.3434 20.0062"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.3 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H17"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17 17V17.01"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                                Base
                            </p>
                        </div>
                        <div>
                            <Radio
                                label={`Canvas`}
                                id="Canvas"
                                name="base"
                                color="red"
                                value={`Canvas`}
                                onChange={handleBaseFilter}
                            />

                            <Radio
                                label={`Board`}
                                id="Board"
                                name="base"
                                color="red"
                                value={`Board`}
                                onChange={handleBaseFilter}
                            />
                            <Radio
                                label={`Cardboard`}
                                id="Cardboard"
                                name="base"
                                color="red"
                                value={`Cardboard`}
                                onChange={handleBaseFilter}
                            />
                            <Radio
                                label={`Wood`}
                                id="Wood"
                                name="base"
                                color="red"
                                value={`Wood`}
                                onChange={handleBaseFilter}
                            />
                            <Radio
                                label={`Glass`}
                                id="Glass"
                                name="base"
                                color="red"
                                value={`Glass`}
                                onChange={handleBaseFilter}
                            />
                            <Radio
                                label={`Panel`}
                                id="Panel"
                                name="base"
                                color="red"
                                value={`Panel`}
                                onChange={handleBaseFilter}
                            />
                            <Radio
                                label={`Bronze`}
                                id="Bronze"
                                name="base"
                                color="red"
                                value={`Bronze`}
                                onChange={handleBaseFilter}
                            />
                            <Radio
                                label={`Paper`}
                                id="Paper"
                                name="base"
                                color="red"
                                value={`Paper`}
                                onChange={handleBaseFilter}
                            />
                            <Radio
                                label={`Fine Art Paper`}
                                id="Fine Art Paper"
                                name="base"
                                color="red"
                                value={`Fine Art Paper`}
                                onChange={handleBaseFilter}
                            />
                            <Radio
                                label={`Special Paper`}
                                id="Special Paper"
                                name="base"
                                color="red"
                                value={`Special Paper`}
                                onChange={handleBaseFilter}
                            />
                            <Radio
                                label={`Fabric`}
                                id="Fabric"
                                name="base"
                                color="red"
                                value={`Fabric`}
                                onChange={handleBaseFilter}
                            />
                            <Radio
                                label={`Soft Fabric`}
                                id="Soft Fabric"
                                name="base"
                                color="red"
                                value={`Soft Fabric`}
                                onChange={handleBaseFilter}
                            />
                            <Radio
                                label={`Others`}
                                id="Others"
                                name="base"
                                color="red"
                                value={`Others`}
                                onChange={handleBaseFilter}
                            />
                        </div>

                        <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

                        {/* Art style filter */}
                        <div className=" flex space-x-2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19 3H15C14.4696 3 13.9609 3.21071 13.5858 3.58579C13.2107 3.96086 13 4.46957 13 5V17C13 18.0609 13.4214 19.0783 14.1716 19.8284C14.9217 20.5786 15.9391 21 17 21C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.9994 7.35022L10.9994 5.35022C10.6243 4.97528 10.1157 4.76465 9.58539 4.76465C9.05506 4.76465 8.54644 4.97528 8.17139 5.35022L5.34339 8.17822C4.96844 8.55328 4.75781 9.06189 4.75781 9.59222C4.75781 10.1225 4.96844 10.6312 5.34339 11.0062L14.3434 20.0062"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.3 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H17"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17 17V17.01"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                                Art Style
                            </p>
                        </div>
                        <div>
                            <Radio
                                label={`3D Art`}
                                id="3D Art"
                                name="art_style"
                                color="red"
                                value={`3D Art`}
                                onChange={handleArtStyleFilter}
                            />

                            <Radio
                                label={`Abstract`}
                                id="Abstract"
                                name="art_style"
                                color="red"
                                value={`Abstract`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Abstract Expressionism`}
                                id="Abstract Expressionism"
                                name="art_style"
                                color="red"
                                value={`Abstract Expressionism`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Avant-garde`}
                                id="Avant-garde"
                                name="art_style"
                                color="red"
                                value={`Avant-garde`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Classicism`}
                                id="Classicism"
                                name="art_style"
                                color="red"
                                value={`Classicism`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Conceptual`}
                                id="Conceptual"
                                name="art_style"
                                color="red"
                                value={`Conceptual`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Contemporary`}
                                id="Contemporary"
                                name="art_style"
                                color="red"
                                value={`Contemporary`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Documentary`}
                                id="Documentary"
                                name="art_style"
                                color="red"
                                value={`Documentary`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Expressionism`}
                                id="Expressionism"
                                name="art_style"
                                color="red"
                                value={`Expressionism`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Fauvism`}
                                id="Fauvism"
                                name="art_style"
                                color="red"
                                value={`Fauvism`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Figurative`}
                                id="Figurative"
                                name="art_style"
                                color="red"
                                value={`Figurative`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Fine Art`}
                                id="Fine Art"
                                name="art_style"
                                color="red"
                                value={`Fine Art`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Folk`}
                                id="Folk"
                                name="art_style"
                                color="red"
                                value={`Folk`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Illustration`}
                                id="Illustration"
                                name="art_style"
                                color="red"
                                value={`Illustration`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Impressionism`}
                                id="Impressionism"
                                name="art_style"
                                color="red"
                                value={`Impressionism`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Minimalism`}
                                id="Minimalism"
                                name="art_style"
                                color="red"
                                value={`Minimalism`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Modern`}
                                id="Modern"
                                name="art_style"
                                color="red"
                                value={`Modern`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Photorealism`}
                                id="Photorealism"
                                name="art_style"
                                color="red"
                                value={`Photorealism`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Pointillism`}
                                id="Pointillism"
                                name="art_style"
                                color="red"
                                value={`Pointillism`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Pop Art`}
                                id="Pop Art"
                                name="art_style"
                                color="red"
                                value={`Pop Art`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Portraiture`}
                                id="Portraiture"
                                name="art_style"
                                color="red"
                                value={`Portraiture`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Realism`}
                                id="Realism"
                                name="art_style"
                                color="red"
                                value={`Realism`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Street Art`}
                                id="Street Art"
                                name="art_style"
                                color="red"
                                value={`Street Art`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Surrealism`}
                                id="Surrealism"
                                name="art_style"
                                color="red"
                                value={`Surrealism`}
                                onChange={handleArtStyleFilter}
                            />
                            <Radio
                                label={`Others`}
                                id="Others"
                                name="art_style"
                                color="red"
                                value={`Others`}
                                onChange={handleArtStyleFilter}
                            />
                        </div>
                    </div>
                    <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
                    <div className="px-0 mt-10 w-full md:w-auto md:mt-0 md:absolute md:right-0 md:bottom-0 md:py-10 lg:px-20 md:px-6">
                        <button
                            onClick={applyFilters}
                            className="w-full hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800"
                        >
                            Apply Filter
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 mx-auto place-items-center md:grid-cols-2 lg:grid-cols-3 mb-20 justify-center">
                {ArtworkCards}
            </div>
            {/* <div>{artworks.links()}</div> */}
            <div>
                <Pagination links={artworks.links} />
            </div>
        </Layout>
    );
}

export default ShowArtworks;
