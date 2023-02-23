import { Footer } from "@/Components/Footer";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Navbar from "@/Components/Navbar";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Register(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        contact_number: "",
        email: "",
        password: "",
        password_confirmation: "",
        street_address: "",
        barangay: "",
        city: "",
        province: "",
        postal_code: "",
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
        <>
            <Head title="Register" />
            <Navbar />

            <section className="bg-gray-100 flex place-items-center">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8">
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <h1 className="pb-4 text-xl font-extrabold">
                                Sign up
                            </h1>
                            <form
                                onSubmit={submit}
                                action=""
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                                            required
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                    <InputError
                                        message={errors.first_name}
                                        className="mt-2"
                                    />
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
                                            required
                                            handleChange={onHandleChange}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label
                                                className="sr-only"
                                                for="email"
                                            >
                                                Email
                                            </label>
                                            <TextInput
                                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Email address"
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={data.email}
                                                required
                                                handleChange={onHandleChange}
                                            />
                                        </div>
                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />

                                        <div>
                                            <label
                                                className="sr-only"
                                                for="phone"
                                            >
                                                Phone
                                            </label>
                                            <TextInput
                                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Phone Number"
                                                type="tel"
                                                id="phone"
                                                name="contact_number"
                                                value={data.contact_number}
                                                required
                                                handleChange={onHandleChange}
                                            />
                                        </div>
                                        <InputError
                                            message={errors.contact_number}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label
                                                className="sr-only"
                                                for="password"
                                            >
                                                Password
                                            </label>
                                            <TextInput
                                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Password"
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={data.password}
                                                required
                                                handleChange={onHandleChange}
                                            />
                                        </div>
                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />

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
                                                value={
                                                    data.password_confirmation
                                                }
                                                required
                                                handleChange={onHandleChange}
                                            />
                                        </div>
                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="flex justify-between text-sm text-gray-900">
                                        <div className="flex gap-1 items-center">
                                            <TextInput
                                                type="checkbox"
                                                className="rounded"
                                            />
                                            <p>
                                                Agree to {""}
                                                <a
                                                    href=""
                                                    className="underline"
                                                >
                                                    Terms and Conditions
                                                </a>
                                            </p>
                                        </div>

                                        <p>
                                            Already have an account? {""}
                                            <Link
                                                href="/login"
                                                className="underline"
                                            >
                                                Sign up! as Betch
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="bg-blue-500 p-4 rounded py-1 self-center">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
