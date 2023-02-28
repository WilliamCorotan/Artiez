import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { useState } from "react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className,
}) {
    const asset = (path) => `${window.location.origin}/${path}`;
    const user = usePage().props.auth.user;
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            contact_number: user.contact_number,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            profile_picture: user.profile_picture,
            description: user.desctiption,
        });
    const [source, setSource] = useState(
        asset(`assets/profile_picture/${user.profile_picture}`)
    );
    const handleFile = (e) => {
        const file = e.target.files[0];
        setData(e.target.name, file);
        setSource(URL.createObjectURL(e.target.files[0]));
        // previewFile(file);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("profile.update"), data);
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>
            <form
                onSubmit={submit}
                className="mt-6 space-y-6"
                encType="multipart/form-data"
            >
                <div className="p-8 aspect-3 grid w-full place-items-center mx-auto">
                    <InputLabel
                        forInput="profile_picture"
                        className="relative hover:cursor-pointer group"
                    >
                        <img
                            className="w-44 h-44 border-4 border-stone-400 rounded-full object-cover group-hover:border-rose-400 object-center"
                            src={source}
                            alt=""
                        />
                        <i className="absolute bottom-0 right-0 -translate-x-2 tra fa-solid fa-camera text-xl bg-white text-stone-500 border-4 border-stone-400 group-hover:border-rose-400 group-hover:text-rose-500 px-2 py-1 rounded-full"></i>
                        <input
                            id="profile_picture"
                            name="profile_picture"
                            className="absolute opacity-0"
                            type="file"
                            accept="image/*"
                            onChange={handleFile}
                        />
                    </InputLabel>
                    <InputError
                        className="mt-2"
                        message={errors.profile_picture}
                    />
                </div>
                {/* First name field */}
                <div>
                    <InputLabel forInput="first_name" value="First Name" />

                    <TextInput
                        id="first_name"
                        name="first_name"
                        className="mt-1 block w-full"
                        value={data.first_name}
                        handleChange={(e) =>
                            setData("first_name", e.target.value)
                        }
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>
                {/* Last name field */}
                <div>
                    <InputLabel forInput="last_name" value="Last Name" />

                    <TextInput
                        id="last_name"
                        name="last_name"
                        className="mt-1 block w-full"
                        value={data.last_name}
                        handleChange={(e) =>
                            setData("last_name", e.target.value)
                        }
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.last_name} />
                </div>

                {/* Contact number field */}
                <div>
                    <InputLabel
                        forInput="contact_number"
                        value="Contact Number"
                    />

                    <TextInput
                        id="contact_number"
                        name="contact_number"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.contact_number}
                        handleChange={(e) =>
                            setData("contact_number", e.target.value)
                        }
                        required
                    />

                    <InputError
                        className="mt-2"
                        message={errors.contact_number}
                    />
                </div>

                {/* Email field */}
                <div>
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        id="email"
                        name="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        handleChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel
                        forInput="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Short Description
                    </InputLabel>
                    <textarea
                        id="description"
                        name="description"
                        className=" mt-1 block w-full h-32 rounded-md border-gray-300 shadow-sm focus:border-rose-600 focus:ring-rose-600 sm:text-sm"
                        placeholder="desciption goes here..."
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    />
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
