import React from "react";
import Layout from "@/Layouts/Layout";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import { Card } from "@/Components/Card";

function ShowArtworks({ auth, artworks }) {
    const { data, setData, get, processing, errors, reset } = useForm({
        search: "",
    });
    const submit = (e) => {
        e.preventDefault();
        get("/artworks", data.search);
    };

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };
    const ArtworkCards = artworks.slice(0,6).map((e) => {
        // console.log(<Card artworks={e} />);
        return <Card key={e.product_id} artworks={e} />;
    });
    return (
        <Layout auth={auth}>
            <form onSubmit={submit}>
                <div className="relative border-2 border-gray-100 m-4 rounded-lg">
                    <div className="absolute top-4 left-3">
                        <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                    </div>
                    <label>
                        <TextInput
                            id="search"
                            type="text"
                            name="search"
                            value={data.search}
                            className="w-full rounded-lg border-gray-200 p-4 pr-12 md:pr-24 lg:pr-32 text-sm shadow-sm"
                            handleChange={onHandleChange}
                        />
                    </label>
                    <div className="absolute top-2 right-2">
                        <button
                            type="submit"
                            className="h-10 w-20 text-white rounded-lg bg-blue-500 hover:bg-blue-600"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </form>
            <div className="grid grid-cols-1 w-4/5 gap-x-8 gap-y-6 mx-auto place-items-center sm:grid-cols-2 lg:grid-cols-3 mb-20 justify-center">

                {ArtworkCards}
            </div>
        </Layout>
    );
}

export default ShowArtworks;
