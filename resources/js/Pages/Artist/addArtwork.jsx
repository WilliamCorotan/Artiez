import { useForm, Head } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import ArtistLayout from "@/Layouts/ArtistLayout";

const addArtwork = ({ auth }) => {
    const { data, setData, post, processing, errors } = useForm({
        product_name: "",
        description: "",
        width: "",
        height: "",
        base: "",
        medium: "",
        art_style: "",
        coa: "",
        product_preview: "",
        price: 0,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
        console.log(event.target.value);
    };
    const handleFileUpload = (e) => {
        setData(e.target.name, e.target.files[0]);
    };
    const submit = (e) => {
        e.preventDefault();

        post(route("artworks.store"));
    };
    return (
        <ArtistLayout auth={auth}>
            <div className="py-8 md:w-4/5 mx-auto">
                <div className="md:grid md:grid-cols-6 md:gap-6">
                    <div className="md:col-span-6">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-center text-lg font-medium leading-6 text-gray-900">
                                New Artwork
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Please fill out the given fields
                            </p>
                        </div>
                    </div>
                    <div className="m-5  md:col-span-6 md:mt-0">
                        <form onSubmit={submit} method="POST">
                            <div className="shadow sm:overflow-hidden sm:rounded-md">
                                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        {/*  Artwork name */}
                                        <div className="col-span-6">
                                            <InputLabel
                                                forInput="product_name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Artwork Name
                                            </InputLabel>

                                            <input
                                                type="text"
                                                name="product_name"
                                                id="product_name"
                                                value={data.product_name}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-600 focus:ring-rose-600 sm:text-sm"
                                                onChange={onHandleChange}
                                                required
                                            />
                                        </div>
                                        {/* Artwork description */}
                                        <div className="col-span-6">
                                            <InputLabel
                                                forInput="description"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Desciption
                                            </InputLabel>
                                            <textarea
                                                id="description"
                                                name="description"
                                                className=" mt-1 block w-full h-32 rounded-md border-gray-300 shadow-sm focus:border-rose-600 focus:ring-rose-600 sm:text-sm"
                                                placeholder="desciption goes here..."
                                                value={data.description}
                                                onChange={onHandleChange}
                                            />

                                            <p className="mt-2 text-sm text-gray-500">
                                                Brief description for your
                                                artwork.
                                            </p>
                                        </div>
                                        {/* Product preview */}
                                        <div className="col-span-6">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Product Preview
                                            </label>
                                            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                                <div className="space-y-1 text-center">
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">
                                                        <InputLabel
                                                            for="product_preview"
                                                            className="relative cursor-pointer rounded-md bg-white font-medium text-rose-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-rose-600 focus-within:ring-offset-2 hover:text-rose-600"
                                                        >
                                                            <span>
                                                                Upload a file
                                                            </span>
                                                            <input
                                                                required
                                                                id="product_preview"
                                                                name="product_preview"
                                                                type="file"
                                                                className="sr-only"
                                                                onChange={
                                                                    handleFileUpload
                                                                }
                                                            />
                                                        </InputLabel>
                                                        <p className="pl-1">
                                                            or drag and drop
                                                        </p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">
                                                        PNG, JPG
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Artwork width */}
                                        <div className="col-span-3">
                                            <InputLabel
                                                forInput="width"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Width
                                            </InputLabel>

                                            <input
                                                type="number"
                                                name="width"
                                                id="width"
                                                value={data.width}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-600 focus:ring-rose-600 sm:text-sm"
                                                onChange={onHandleChange}
                                                required
                                            />
                                        </div>
                                        {/* Artwork hieght */}
                                        <div className="col-span-3">
                                            <InputLabel
                                                forInput="width"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Height
                                            </InputLabel>

                                            <input
                                                type="number"
                                                name="height"
                                                id="height"
                                                value={data.height}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-600 focus:ring-rose-600 sm:text-sm"
                                                onChange={onHandleChange}
                                                required
                                            />
                                        </div>
                                        {/* Artwork base */}
                                        <div className="col-span-6 md:col-span-3">
                                            <InputLabel
                                                forInput="medium"
                                                className="block text-sm font-base text-gray-700"
                                            >
                                                Medium
                                            </InputLabel>
                                            <select
                                                id="medium"
                                                name="medium"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-rose-600 focus:outline-none focus:ring-rose-600 sm:text-sm"
                                                onInput={onHandleChange}
                                            >
                                                <option>
                                                    -Please select a medium-
                                                </option>
                                                <option value="Acrylic">
                                                    Acrylic
                                                </option>
                                                <option value="Charcoal">
                                                    Charcoal
                                                </option>
                                                <option value="Digital">
                                                    Digital
                                                </option>
                                                <option value="Oil">Oil</option>
                                                <option value="Watercolor">
                                                    Watercolor
                                                </option>
                                                <option value="Graphite">
                                                    Graphite
                                                </option>
                                                <option value="Ink">Ink</option>
                                                <option value="Pastel">
                                                    Pastel
                                                </option>
                                                <option value="Pencil">
                                                    Pencil
                                                </option>
                                                <option value="Others">
                                                    Others
                                                </option>
                                            </select>
                                        </div>
                                        {/* Artwork base */}
                                        <div className="col-span-6 md:col-span-3">
                                            <InputLabel
                                                forInput="base"
                                                className="block text-sm font-base text-gray-700"
                                            >
                                                Base
                                            </InputLabel>
                                            <select
                                                id="base"
                                                name="base"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-rose-600 focus:outline-none focus:ring-rose-600 sm:text-sm"
                                                onInput={onHandleChange}
                                            >
                                                <option>
                                                    -Please select a base-
                                                </option>
                                                <option value="Canvas">
                                                    Canvas
                                                </option>
                                                <option value="Board">
                                                    Board
                                                </option>
                                                <option value="Cardboard">
                                                    Cardboard
                                                </option>
                                                <option value="Wood">
                                                    Wood
                                                </option>
                                                <option value="Glass">
                                                    Glass
                                                </option>
                                                <option value="Panel">
                                                    Panel
                                                </option>
                                                <option value="Bronze">
                                                    Bronze
                                                </option>
                                                <option value="Paper">
                                                    Paper
                                                </option>
                                                <option value="Fine Art Paper">
                                                    Fine Art Paper
                                                </option>
                                                <option value="Special Paper">
                                                    Special Paper
                                                </option>
                                                <option value="Fabric">
                                                    Fabric
                                                </option>
                                                <option value="Soft Fabric">
                                                    Soft Fabric
                                                </option>
                                                <option value="Others">
                                                    Others
                                                </option>
                                            </select>
                                        </div>
                                        {/* Artwork art style */}
                                        <div className="col-span-6">
                                            <InputLabel
                                                forInput="art_style"
                                                className="block text-sm font-base text-gray-700"
                                            >
                                                Art Style
                                            </InputLabel>
                                            <select
                                                id="art_style"
                                                name="art_style"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-rose-600 focus:outline-none focus:ring-rose-600 sm:text-sm"
                                                onInput={onHandleChange}
                                            >
                                                <option>
                                                    -Please select an art style-
                                                </option>
                                                <option value="3D Art">
                                                    3d Art
                                                </option>
                                                <option value="Abstract">
                                                    Abstract
                                                </option>
                                                <option value="Abstract Expressionism">
                                                    Abstract Expressionism
                                                </option>
                                                <option value="Avant-garde">
                                                    Avant-garde
                                                </option>
                                                <option value="Classicism">
                                                    Classicism
                                                </option>
                                                <option value="Conceptual">
                                                    Conceptual
                                                </option>
                                                <option value="Contemporary">
                                                    Contemporary
                                                </option>
                                                <option value="Documentary">
                                                    Documentary
                                                </option>
                                                <option value="Expressionism">
                                                    Expressionism
                                                </option>
                                                <option value="Fauvism">
                                                    Fauvism
                                                </option>
                                                <option value="Figurative">
                                                    Figurative
                                                </option>
                                                <option value="Fine Art">
                                                    Fine Art
                                                </option>
                                                <option value="Folk">
                                                    Folk
                                                </option>
                                                <option value="Illustration">
                                                    Illustration
                                                </option>
                                                <option value="Impressionism">
                                                    Impressionism
                                                </option>
                                                <option value="Minimalism">
                                                    Minimalism
                                                </option>
                                                <option value="Modern">
                                                    Modern
                                                </option>
                                                <option value="Photorealism">
                                                    Photorealism
                                                </option>
                                                <option value="Pointillism">
                                                    Pointillism
                                                </option>
                                                <option value="Pop Art">
                                                    Pop Art
                                                </option>
                                                <option value="Portraiture">
                                                    Portraiture
                                                </option>
                                                <option value="Realism">
                                                    Realism
                                                </option>
                                                <option value="Street Art">
                                                    Street Art
                                                </option>
                                                <option value="Surrealism">
                                                    Surrealism
                                                </option>
                                                <option value="Others">
                                                    Others
                                                </option>
                                            </select>
                                        </div>
                                        {/*  Artwork price */}
                                        <div className="col-span-6">
                                            <InputLabel
                                                forInput="price"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Price
                                            </InputLabel>

                                            <input
                                                type="number"
                                                name="price"
                                                id="price"
                                                value={data.price}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-600 focus:ring-rose-600 sm:text-sm"
                                                onChange={onHandleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-rose-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200"></div>
                </div>
            </div>
        </ArtistLayout>
    );
};

export default addArtwork;
