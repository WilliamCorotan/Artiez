export const Hero = () => {
    return (
        <>
            <div className="relative overflow-hidden bg-no-repeat bg-cover h-64 md:h-screen bg-center bg-[url('assets/hero-bg.avif')]">
                <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden bg-fixed text-center grid place-items-center text-gray-50 px-6 md:px-12">

                            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight">
                                Discover the Magic of Art at Artiez Gallery
                            </h1>

                </div>
            </div>

        </>
    );
};
