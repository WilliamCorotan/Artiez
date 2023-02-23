import React from "react";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";

function PreRegistration({ auth }) {
    return (
        <Layout
            className="grid place-items-center min-h-fit py-16 md:py-32 "
            auth={auth}
        >
            <section className="container mx-auto w-10/12 ">
                <div className=" my-6">
                    <p className="text-xl md:text-2xl text-center lg:text-left">
                        Sign up for an account
                    </p>
                    {/* <p className=" text-rose-600">Everybody loves art!</p> */}
                </div>
                <div className="grid  lg:grid-flow-col justify-center gap-5">
                    <div className=" bg-slate-50 p-11">
                        <div className="grid place-items-center mx-auto w-fit justify-between">
                            <img src="/artlover.svg" alt="" className="h-16" />
                            <p className="text-center text-2xl mt-2">
                                I am an art lover & collector
                            </p>
                        </div>
                        <div className="grid place-items-center">
                            <p className="py-4 mb-3 text-justify">
                                Create an account to save your favorites, track
                                your orders, and receive personalized mails.
                            </p>
                            <Link
                                href="/register/user"
                                className="w-full text-center bg-rose-600 py-2 px-3 rounded-sm text-slate-50 mb-3"
                            >
                                Create Account
                            </Link>

                            <p>Or</p>

                            <p className=" text-xs py-1 px-2">
                                Already have a user account?
                            </p>
                            <Link
                                href="/login"
                                className="w-full border-2 border-rose-600 py-2 px-3 rounded-sm text-sm text-center"
                            >
                                Sign in
                            </Link>
                        </div>
                    </div>
                    <div className=" bg-slate-50 p-11">
                        <div className="grid place-items-center mx-auto w-fit justify-between">
                            <img
                                src="/artistlover.svg"
                                alt=""
                                className="h-16"
                            />
                            <p className="text-center text-2xl mt-2">
                                I am an artist
                            </p>
                        </div>
                        <div className="grid place-items-center">
                            <p className="py-4 mb-3 text-justify">
                                Are you interested in becoming a member artist
                                of Filipino Art and want to sell your artwork
                                online?
                            </p>
                            <Link
                                href="/register/artist"
                                className="w-full text-center bg-rose-600 py-2 px-3 rounded-sm text-slate-50 mb-3"
                            >
                                Apply Online
                            </Link>

                            <p>Or</p>

                            <p className=" text-xs py-1 px-2">
                                Already have a user account?
                            </p>
                            <Link
                                href="/login"
                                className="w-full border-2 border-rose-600 py-2 px-3 rounded-sm text-sm text-center"
                            >
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default PreRegistration;
