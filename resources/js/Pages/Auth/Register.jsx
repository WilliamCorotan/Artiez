import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import { Footer } from "@/Components/Footer";
import Layout from "@/Layouts/Layout";

export default function Register(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        contact_number: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
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

        post(route("register/user"));
    };

    return (
        <Layout auth={props.auth} className="min-h-fit">
            <Head title="Register" />
            <section className="flex place-items-center">
                <div className="w-4/5 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8">
                        <div className="rounded-lg bg-whiteshadow-lg lg:col-span-3 ">
                            <h1 className="pb-4 text-xl font-extrabold">
                                Sign up
                            </h1>
                            <form
                                onSubmit={submit}
                                action=""
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {/* First name field */}
                                    <div>
                                        <InputLabel
                                            className="sr-only"
                                            forInput="first_name"
                                            value="First Name"
                                        >
                                            First Name
                                        </InputLabel>
                                        <TextInput
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="First Name"
                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            value={data.first_name}
                                            handleChange={onHandleChange}
                                        />
                                        <InputError
                                            message={errors.first_name}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* Last name field */}
                                    <div>
                                        <label
                                            className="sr-only"
                                            for="last_name"
                                        >
                                            Last Name
                                        </label>
                                        <TextInput
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Last Name"
                                            type="text"
                                            id="last_name"
                                            name="last_name"
                                            value={data.last_name}
                                            handleChange={onHandleChange}
                                        />
                                        <InputError
                                            message={errors.last_name}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                {/* Email field */}

                                <div>
                                    <label className="sr-only" for="email">
                                        Email
                                    </label>
                                    <TextInput
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        handleChange={onHandleChange}
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" for="phone">
                                        Phone
                                    </label>
                                    <TextInput
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Phone Number"
                                        type="tel"
                                        id="phone"
                                        name="contact_number"
                                        value={data.contact_number}
                                        handleChange={onHandleChange}
                                    />
                                    <InputError
                                        message={errors.contact_number}
                                        className="mt-2"
                                    />
                                </div>

                                {/* Password field */}
                                <div>
                                    <label className="sr-only" for="password">
                                        Password
                                    </label>
                                    <TextInput
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Password"
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={data.password}
                                        handleChange={onHandleChange}
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                {/* Confirm password field */}
                                <div>
                                    <label
                                        className="sr-only"
                                        for="password_confirmation"
                                    >
                                        Confirm Password
                                    </label>
                                    <TextInput
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Confirm Password"
                                        type="password"
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        handleChange={onHandleChange}
                                    />
                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>

                                {/* Terms and conditions */}
                                <div className="grid lg:grid-flow-col  text-sm text-gray-900">
                                    <div className="flex gap-1 items-center">
                                        <TextInput
                                            type="checkbox"
                                            className="rounded mr-1 accent-rose-600 "
                                            required
                                        />
                                        <p>
                                            Agree to{" "}
                                            <Link href="" className="underline">
                                                Terms and Conditions
                                            </Link>
                                        </p>
                                    </div>

                                    <p className="mt-2 ml-2 lg:place-self-end">
                                        Already have an account? {""}
                                        <Link
                                            href="/login"
                                            className="underline"
                                        >
                                            Sign up!
                                        </Link>
                                    </p>
                                </div>
                                {/* Submit button */}
                                <div className="flex justify-end">
                                    <TextInput
                                        type="submit"
                                        className="text-lg  text-white bg-rose-600 py-3 px-4 rounded self-center"
                                        value="Sign up"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
