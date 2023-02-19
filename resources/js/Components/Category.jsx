import { Link } from "@inertiajs/react";

export const Category = () => {
    return (
        <>
            <section className="bg-gray-200 h-screen mb-40">
                <h1 className="uppercase text-red-700 text-center font-bold text-4xl pt-20">
                    How it works
                </h1>
                <p className="text-center font-bold uppercase py-2">
                    Connect your Art business with Artiez Gallery
                </p>

                <div className="grid w-full mx-auto place-content-center grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3  py-20">
                    <div className="h-72 my-8 rounded shadow-lg shadow-gray-200  bg-white  duration-300 hover:-translate-y-1">
                        <img
                            className="w-full"
                            src="assets/m1_register.avif"
                            alt=""
                        />
                        <figcaption className="py-5 text-center">
                            <p className="text-lg font-bold leading-relaxed">
                                Register
                            </p>
                        </figcaption>
                    </div>
                    <div className="my-8 rounded shadow-lg shadow-gray-200  bg-white  duration-300 hover:-translate-y-1">
                        <img
                            className="w-full object-cover"
                            src="assets/m2_register.avif"
                            alt=""
                        />
                        <figcaption className="py-5">
                            <p className="text-lg  font-bold text-center leading-relaxed">
                                Register
                            </p>
                        </figcaption>
                    </div>
                    <div className="my-8 rounded shadow-lg shadow-gray-200  bg-white  duration-300 hover:-translate-y-1">
                        <img
                            className="w-full object-cover"
                            src="assets/m3_register.avif"
                            alt=""
                        />
                        <figcaption className="py-5">
                            <p className="text-lg font-bold text-center leading-relaxed">
                                Register
                            </p>
                        </figcaption>
                    </div>
                </div>
            </section>
        </>
    );
};
