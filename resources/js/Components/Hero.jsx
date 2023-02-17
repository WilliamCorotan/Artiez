export const Hero = () => {
    return (
        <>
            <div className="relative overflow-hidden hidden sm:block bg-no-repeat bg-cover h-screen bg-center bg-[url('assets/hero-bg.jpg')]">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-screen h-screen overflow-hidden bg-fixed">
                    <div className="flex justify-center items-center h-full">
                        <div className="text-center text-gray-50 px-6 md:px-12">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight mb-12">
                                Discover the Magic of Art at Artiez Gallery
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
