import { useState } from "react";

export const Faqs = () => {
    const [faq1Open, setFaq1Open] = useState(false);
    const [faq2Open, setFaq2Open] = useState(false);
    const [faq3Open, setFaq3Open] = useState(false);
    const [faq4Open, setFaq4Open] = useState(false);

    return (
        <>
            <section className="mx-auto container w-4/5 lg:w-1/2  text-justify my-20">
                <h1 className="text-5xl p-10 font-bold text-center">FAQ's</h1>
                <div
                    id="accordion-color"
                    data-accordion="collapse"
                    data-active-classes="bg-blue-100 text-blue-600 "
                >
                    <h2 id="accordion-color-heading-1">
                        <button
                            onClick={() => {
                                setFaq1Open(!faq1Open);
                            }}
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-800 border border-b-0 border-gray-200 rounded-t-xl focus:ring-2 focus:ring-gray-200 "
                            data-accordion-target="#accordion-color-body-1"
                            aria-expanded="true"
                            aria-controls="accordion-color-body-1"
                        >
                            <span className="font-bold text-lg hover:text-rose-700">
                                Who can use an art gallery platform with online
                                community and online chatting with artists and
                                users?
                            </span>
                            <svg
                                data-accordion-icon
                                className={`w-6 h-6 ${
                                    faq1Open ? "rotate-180" : "rotate"
                                }
                                shrink-0`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-color-body-1"
                        className={faq1Open ? "block" : "hidden"}
                        aria-labelledby="accordion-color-heading-1"
                    >
                        <div className="p-5 font-light border border-b-0 border-gray-200 ">
                            <p className="mb-2 text-gray-600 italic ">
                                Anyone who is interested in buying, selling, or
                                viewing art can use an art gallery platform with
                                online community and online chatting with
                                artists and users. Artists can use the platform
                                to showcase and sell their artwork, while users
                                can use it to browse and purchase artwork, as
                                well as interact with artists and other users.
                            </p>
                        </div>
                    </div>
                    <h2 id="accordion-color-heading-2">
                        <button
                            onClick={() => {
                                setFaq2Open(!faq2Open);
                            }}
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-800 border border-b-0 border-gray-200 focus:ring-2 focus:ring-gray-200   "
                            data-accordion-target="#accordion-color-body-2"
                            aria-expanded="false"
                            aria-controls="accordion-color-body-2"
                        >
                            <span className="font-bold text-lg hover:text-rose-700">
                                How do I sign up for an art gallery platform
                                with online community and online chatting with
                                artists and users?
                            </span>
                            <svg
                                data-accordion-icon
                                className={`w-6 h-6 ${
                                    faq2Open ? "rotate-180" : "rotate"
                                }
                                shrink-0`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-color-body-2"
                        className={faq2Open ? "block" : "hidden"}
                        aria-labelledby="accordion-color-heading-2"
                    >
                        <div className="p-5 font-light border border-b-0 border-gray-200 ">
                            <p className="mb-2 text-gray-600 italic">
                                To sign up for an art gallery platform with
                                online community and online chatting with
                                artists and users, you usually need to create an
                                account on the website. You may need to provide
                                some personal information, such as your name,
                                email address, and a password. Once you have
                                created an account, you can start using the
                                platform to browse artwork, connect with artists
                                and other users, and buy and sell artwork.
                            </p>
                        </div>
                    </div>
                    <h2 id="accordion-color-heading-3">
                        <button
                            onClick={() => {
                                setFaq3Open(!faq3Open);
                            }}
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-800 border border-gray-200 focus:ring-2 focus:ring-gray-200  "
                            data-accordion-target="#accordion-color-body-3"
                            aria-expanded="false"
                            aria-controls="accordion-color-body-3"
                        >
                            <span className="font-bold text-lg hover:text-rose-700">
                                How do I sell artwork on an art gallery platform
                                with online community and online chatting with
                                artists and users?
                            </span>
                            <svg
                                data-accordion-icon
                                className={`w-6 h-6 ${
                                    faq3Open ? "rotate-180" : "rotate"
                                }
                                shrink-0`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-color-body-3"
                        className={faq3Open ? "block" : "hidden"}
                        aria-labelledby="accordion-color-heading-3"
                    >
                        <div className="p-5 font-light border border-t-0 border-gray-200 ">
                            <p className="mb-2 text-gray-600 italic ">
                                To sell artwork on an art gallery platform with
                                online community and online chatting with
                                artists and users, you can create a profile and
                                upload images of your artwork. You may be able
                                to set your own prices and provide descriptions
                                of your artwork.
                            </p>
                            <p className="mb-2 text-gray-600 italic">
                                When a user is interested in buying your
                                artwork, they can contact you through the
                                built-in messaging feature to arrange the sale.
                                Once the sale is completed, you will need to
                                ship the artwork to the buyer.
                            </p>
                        </div>
                    </div>
                    <h2 id="accordion-color-heading-4">
                        <button
                            onClick={() => {
                                setFaq4Open(!faq4Open);
                            }}
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-800 border border-gray-200 focus:ring-2 focus:ring-gray-200  "
                            data-accordion-target="#accordion-color-body-3"
                            aria-expanded="false"
                            aria-controls="accordion-color-body-3"
                        >
                            <span className="font-bold text-lg hover:text-rose-700">
                                Is it safe to buy and sell artwork on an art
                                gallery platform with online community and
                                online chatting with artists and users?
                            </span>
                            <svg
                                data-accordion-icon
                                className={`w-6 h-6 ${
                                    faq4Open ? "rotate-180" : "rotate"
                                }
                                shrink-0`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-color-body-3"
                        className={faq4Open ? "block" : "hidden"}
                        aria-labelledby="accordion-color-heading-4"
                    >
                        <div className="p-5 font-light border border-t-0 border-gray-200 ">
                            <p className="mb-2 text-gray-600 italic">
                                The safety of buying and selling artwork on an
                                art gallery platform with online community and
                                online chatting with artists and users depends
                                on the platform's security measures. As a web
                                developer, we will incorporate SSL and HTTPS
                                protocols to ensure that all transactions are
                                secure. We will also ensure that user data is
                                protected with appropriate encryption and
                                firewalls. However, we recommend that users take
                                additional measures to protect themselves, such
                                as using strong.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
