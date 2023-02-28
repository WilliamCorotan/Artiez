import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Layout from "@/Layouts/Layout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdateAddressForm from "./Partials/UpdateAddressForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

import ArtistLayout from "@/Layouts/ArtistLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function Edit({ auth, mustVerifyEmail, status }) {
    const [edit, setEdit] = useState();
    return (
        <>
            <Head title="Profile" />
            <ArtistLayout auth={auth}>
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className=""
                            />
                        </div>

                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <UpdateAddressForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className=""
                            />
                        </div>

                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <UpdatePasswordForm className="" />
                        </div>

                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <DeleteUserForm className="" />
                        </div>
                    </div>
                </div>
            </ArtistLayout>
        </>
    );
}
