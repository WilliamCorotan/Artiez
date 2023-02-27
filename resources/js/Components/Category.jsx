import { Link } from "@inertiajs/react";

export const Category = () => {
    return (
        <>
            <section className="relative overflow-hidden h-fit pb-20 bg-rose-600 ">
                <div className=" justify-items-center text-white">
                    <h1 className="uppercase  text-center font-bold text-4xl pt-14">
                        How it works
                    </h1>
                    <p className="text-center font-bold uppercase py-2">
                        Connect your Art business with Artiez Gallery
                    </p>
                </div>

                <div className="grid w-4/5 mx-auto py-10 place-items-center gap-10 md:gap-8 text-gray-900 sm:grid-cols-1 lg:grid-cols-3 uppercase ">
                    <div className="relative shadow-lg shadow-gray-200 duration-300 hover:-translate-y-1 max-w-sm bg-white">
                        <div>
                            <img
                                className="h-80 object-cover"
                                src="assets/m1_register.avif"
                                alt=""
                            />
                        </div>
                        <div className="absolute -top-4 -left-4 py-1 px-3 rounded-full font-bold text-xl border-rose-600 bg-white border-2 text-rose-600">
                            <span>1</span>
                        </div>
                        <figcaption className="py-5 text-center">
                            <p className="text-lg font-bold leading-relaxed">
                                Register
                            </p>
                        </figcaption>
                    </div>
                    <div className="relative shadow-lg shadow-gray-200  duration-300 hover:-translate-y-1 max-w-sm bg-white">
                        <div>
                            <img
                                className="h-80 object-cover"
                                src="assets/m2_register.avif"
                                alt=""
                            />
                        </div>
                        <div className="absolute -top-4 -left-4 py-1 px-3 rounded-full font-bold text-xl border-rose-600 bg-white border-2 text-rose-600">
                            <span>2</span>
                        </div>
                        <figcaption className="py-5">
                            <p className="text-lg  font-bold text-center leading-relaxed">
                                Add Product
                            </p>
                        </figcaption>
                    </div>
                    <div className="relative shadow-lg shadow-gray-200  duration-300 hover:-translate-y-1 max-w-sm bg-white">
                        <div>
                            <img
                                className="h-80 object-cover"
                                src="assets/m3_register.avif"
                                alt=""
                            />
                        </div>
                        <div className="absolute -top-4 -left-4 py-1 px-3 rounded-full font-bold text-xl border-rose-600 bg-white border-2 text-rose-600">
                            <span>3</span>
                        </div>
                        <figcaption className="py-5">
                            <p className="text-lg font-bold text-center leading-relaxed">
                                Start Selling
                            </p>
                        </figcaption>
                    </div>
                </div>
            </section>
        </>
    );
};
