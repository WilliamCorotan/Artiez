import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
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

        post(route("register"));
    };

    return (
        <>
            <Head title="Register" />

            <form onSubmit={submit} className="min-h-screen">
                <section class="bg-gray-100 flex place-items-center">
                    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 gap-x-16 gap-y-8">
                            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                                <h1 class="pb-4 text-xl font-extrabold">
                                    Register
                                </h1>
                                <form action="" class="space-y-4">
                                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label
                                                class="sr-only"
                                                for="first_name"
                                            >
                                                First Name
                                            </label>
                                            <input
                                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="First Name"
                                                type="text"
                                                id="first_name"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                class="sr-only"
                                                for="last_name"
                                            >
                                                Last Name
                                            </label>
                                            <input
                                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Last Name"
                                                type="text"
                                                id="last_name"
                                            />
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label class="sr-only" for="email">
                                                Email
                                            </label>
                                            <input
                                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Email address"
                                                type="email"
                                                id="email"
                                            />
                                        </div>

                                        <div>
                                            <label class="sr-only" for="phone">
                                                Phone
                                            </label>
                                            <input
                                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Phone Number"
                                                type="tel"
                                                id="phone"
                                            />
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label
                                                class="sr-only"
                                                for="password"
                                            >
                                                Password
                                            </label>
                                            <input
                                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Password"
                                                type="password"
                                                id="password"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                class="sr-only"
                                                for="confirm_password"
                                            >
                                                Confirm Password
                                            </label>
                                            <input
                                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Confirm Password"
                                                type="text"
                                                id="confirm_password"
                                            />
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label
                                                class="sr-only"
                                                for="street_address"
                                            >
                                                Street Address
                                            </label>
                                            <input
                                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Street Address"
                                                type="text"
                                                id="street_address"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                class="sr-only"
                                                for="barangay"
                                            >
                                                Barangay
                                            </label>
                                            <input
                                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Barangay"
                                                type="text"
                                                id="barangay"
                                            />
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                        <div>
                                            <label class="sr-only" for="city">
                                                City
                                            </label>
                                            <input
                                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="City"
                                                type="text"
                                                id="city"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                class="sr-only"
                                                for="province"
                                            >
                                                Province
                                            </label>
                                            <input
                                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Province"
                                                type="text"
                                                id="province"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                class="sr-only"
                                                for="postal_code"
                                            >
                                                Postal Code
                                            </label>
                                            <input
                                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Postal Code"
                                                type="text"
                                                id="postal_code"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <div className="flex gap-1 items-center">
                                            <input
                                                type="checkbox"
                                                class="rounded"
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
                                            Already have an account?
                                            <a href="" className="underline">
                                                Sign up! Betch
                                            </a>
                                        </p>
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="bg-blue-500 p-4 rounded py-1 self-center">
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </>
    );
}
