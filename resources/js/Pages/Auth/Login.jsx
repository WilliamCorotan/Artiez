import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-large text-lg text-gray-900">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <section className="relative flex">
                    <div className="w-1/2 min-h-screen hidden lg:block">
                        <img
                            alt="Welcome"
                            src="assets/artiez.svg"
                            className="w-full h-screen self-auto lg:visible bg-no-repeat object-cover overflow-x-visible "
                        />
                    </div>
                    <div className="grid items-center justify-center min-h-screen px-4 w-screen py-12 md:px-8 lg:py-24 bg-[url('assets/artiez.svg')] bg-no-repeat bg-cover lg:bg-none">
                        <div className=" ">
                            <div className="flex flex-col items-center mb-5">
                                <h1 className="inline text-5xl z-10">
                                    Welcome Artiezan, Footer ng Ina mo!
                                </h1>

                                <p className="inline mt-4 text-gray-900 text-center z-10">
                                    “The art of life is to know how to enjoy a
                                    little and to endure much.” ― William
                                    Hazlitt
                                </p>
                            </div>

                            <form
                                action=""
                                className="grid place-items-center align-top mt-8 mb-0 space-y-4 "
                            >
                                <div>
                                    <label for="email" className="sr-only">
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
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <label for="password" className="sr-only">
                                        Password
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
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
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
                                            Sign up
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
                    </div>
                </section>
            </form>
        </>
    );
}
