export const Test = () => {
    return (
        <>
            <div className="bg-white">
                <section className="flex h-screen w-screen items-center justify-items-end bg-cover bg-no-repeat bg-[url('assets/artiez.svg')]">
                    <div className="rounded-xl mx-auto px-16 py-10 shadow-lg backdrop-blur-sm max-sm:px-8">
                        <div className="flex flex-col items-center mb-5">
                            <h1 className="inline text-5xl text-gray-900 font-bold">
                                Welcome Artiezan!
                            </h1>

                            <p className="inline mt-4 text-gray-900 font-bold">
                                “The art of life is to know how to enjoy a
                                little and to endure much.” ― William Hazlitt
                            </p>
                        </div>

                        <form
                            action="#"
                            className="grid place-items-center align-top mt-8 mb-0 space-y-4"
                        >
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        className="w-full rounded-lg border-gray-200 p-4 pr-12 md:pr-24 lg:pr-32 text-sm shadow-sm"
                                        placeholder="Enter email"
                                    />

                                    <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLineCap="round"
                                                strokeLineJoin="round"
                                                strokeWidth="2"
                                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="sr-only">
                                    {" "}
                                    Password{" "}
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        className="w-full rounded-lg border-gray-200 p-4 pr-12 md:pr-24 lg:pr-32 text-sm shadow-sm"
                                        placeholder="Enter password"
                                    />

                                    <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLineCap="round"
                                                strokeLineJoin="round"
                                                strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLineCap="round"
                                                strokeLineJoin="round"
                                                strokeWidth="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-900">
                                    No account?
                                    <a href="#" className="underline">
                                        {" "}
                                        Sign up{" "}
                                    </a>
                                </p>

                                <button
                                    type="submit"
                                    className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
};
