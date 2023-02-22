import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className,
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            street_address: user.street_address,
            barangay: user.barangay,
            province: user.province,
            city: user.city,
            postal_code: user.postal_code,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Delivery Address
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's delivery address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                {/* Street address field */}
                <div>
                    <InputLabel for="street_address" value="Street Address" />

                    <TextInput
                        id="street_address"
                        className="mt-1 block w-full"
                        value={data.street_address}
                        handleChange={(e) =>
                            setData("street_address", e.target.value)
                        }
                        required
                        isFocused
                    />

                    <InputError
                        className="mt-2"
                        message={errors.street_address}
                    />
                </div>
                {/* Barangay field */}
                <div>
                    <InputLabel for="barangay" value="Barangay" />

                    <TextInput
                        id="barangay"
                        className="mt-1 block w-full"
                        value={data.barangay}
                        handleChange={(e) =>
                            setData("barangay", e.target.value)
                        }
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.barangay} />
                </div>

                {/* Province field */}
                <div>
                    <InputLabel for="province" value="Province" />

                    <TextInput
                        id="province"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.province}
                        handleChange={(e) =>
                            setData("province", e.target.value)
                        }
                        required
                    />

                    <InputError className="mt-2" message={errors.province} />
                </div>

                {/* Province field */}
                <div>
                    <InputLabel for="city" value="City" />

                    <TextInput
                        id="city"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.city}
                        handleChange={(e) => setData("city", e.target.value)}
                        required
                    />

                    <InputError className="mt-2" message={errors.city} />
                </div>

                {/* Postal Code field */}
                <div>
                    <InputLabel for="postal_code" value="Postal Code" />

                    <TextInput
                        id="postal_code"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.postal_code}
                        handleChange={(e) =>
                            setData("postal_code", e.target.value)
                        }
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.postal_code} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton processing={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
