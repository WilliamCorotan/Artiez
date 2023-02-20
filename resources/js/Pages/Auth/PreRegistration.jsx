import React from "react";
import Layout from "@/Layouts/Layout";

function PreRegistration() {
    return (
        <Layout className="grid place-items-center " auth={null}>
            <section className="container mx-auto w-10/12 ">
                <div className=" my-6">
                    <p className=" text-lg">Sign up for an account</p>
                    <p className=" text-rose-600">Everybody loves art!</p>
                </div>
                <div className="flex justify-center gap-5">
                    <div className=" bg-slate-50 p-11">
                        <div className="flex justify-between">
                            <p className=" text-2xl">I appreciate art</p>
                            <img src="/artlover.svg" alt="" className="h-16" />
                        </div>
                        <div className="grid place-items-center">
                            <p className="py-3 mb-3">
                                Create an account to save your favorites, track
                                your orders, and receive personalized mails.
                            </p>
                            <button className=" bg-rose-600 py-1 px-2 rounded-sm text-slate-50 mb-3">
                                Create Account
                            </button>

                            <p>Or</p>

                            <p className=" text-sm py-1 px-2">
                                Already have a user account?
                            </p>
                            <button className=" border-2 border-rose-600 py-1 px-2 rounded-sm text-sm mt-3">
                                Sign in
                            </button>
                        </div>
                    </div>

                    <div className=" bg-slate-50 p-11">
                        <div>
                            <p className=" text-2xl">I appreciate art</p>
                            <img
                                src="/artistlover.svg"
                                alt=""
                                className="h-16"
                            />
                        </div>
                        <div className="grid place-items-center">
                            <p className="py-3 mb-3">
                                Create an account to save your favorites, track
                                your orders, and receive personalized mails.
                            </p>
                            <button className=" bg-rose-600 py-1 px-2 rounded-sm text-slate-50 mb-3">
                                Create Account
                            </button>

                            <p>Or</p>

                            <p className=" text-sm py-1 px-2">
                                Already have a user account?
                            </p>
                            <button className=" border-2 border-rose-600 py-1 px-2 rounded-sm text-sm mt-3">
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default PreRegistration;
