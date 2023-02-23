import Layout from "@/Layouts/Layout";
export const Artists = () => {

    return (
        <>
            <Layout>
                <section className="w-full h-screen mt-10 mx-auto container">
                    <div className="p-5">
                        <h1 className="text-2xl text-bold">Ramuel De Luna</h1>
                        <p className="text-gray-600 mb-4">
                            <i className="fas fa-location-dot"></i> Abucay,
                            Bataan
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-1 md:lg:xl:grid-cols-3">
                        <div className="col-span-1 w-full h-full bg-slate-100 p-3 text-gray-600">
                            <div className="flex px-3 py-5">
                                <img
                                    className="w-48 h-48 object-cover object-center"
                                    src="/public/assets/artwork/art3.jpg"
                                    alt=""
                                />
                                <div className="ml-3">
                                    <p className="flex">
                                        <img
                                            className="w-6 h-6"
                                            src="/public/assets/canvas.png"
                                            alt=""
                                        />
                                        1 Artwork for sale
                                    </p>
                                    <p className="pt-4">
                                        <i className="fas fa-user-check"></i>
                                        Member since Date Created
                                    </p>
                                </div>
                            </div>
                            <div className="uppercase px-3">
                                <a href="#">Follow Artist</a>
                            </div>
                        </div>
                        <div className="col-span-2 w-full p-5 text-gray-600">
                            <img src="/public/assets/hero-bg.avif" alt="" />
                            <p className="pt-10">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Velit odio voluptate nulla
                                possimus minima corrupti nostrum sint illo eum
                                doloribus perferendis recusandae, quaerat quia
                                cumque dolor. Sit consequuntur obcaecati
                                reiciendis.
                            </p>
                            <p className="py-10">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Velit odio voluptate nulla
                                possimus minima corrupti nostrum sint illo eum
                                doloribus perferendis recusandae, quaerat quia
                                cumque dolor. Sit consequuntur obcaecati
                                reiciendis.
                            </p>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};
