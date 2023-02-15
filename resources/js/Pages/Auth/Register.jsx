import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';


export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        contact_number: '',
        email: '',
        password: '',
        password_confirmation: '',
        street_address: '',
        barangay: '',
        city: '',
        province: '',
        postal_code: '',
         
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                {/* First Name Field */}
                <div className="mt-4">
                    <InputLabel forInput="first_name" value="First Name" />

                    <TextInput
                        id="first_name"
                        name="first_name"
                        value={data.first_name}
                        className="mt-1 block w-full"
                        autoComplete="first-name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.first_name} className="mt-2" />
                </div>
                {/* Last Name Field */}
                <div className="mt-4">
                    <InputLabel forInput="last_name" value="Last Name" />

                    <TextInput
                        id="last_name"
                        name="last_name"
                        value={data.last_name}
                        className="mt-1 block w-full"
                        autoComplete="family-name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.last_name} className="mt-2" />
                </div>
                {/* Email Field */}
                <div className="mt-4">
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                {/* Contact Number Field */}
                <div className="mt-4">
                    <InputLabel forInput="contact_number" value="Contact Number" />

                    <TextInput
                        id="contact_number"
                        type="text"
                        name="contact_number"
                        value={data.contact_number}
                        className="mt-1 block w-full"
                        autoComplete="tel"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.contact_number} className="mt-2" />
                </div>
                {/* Password Field */}
                <div className="mt-4">
                    <InputLabel forInput="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>
                {/* Password Confirmation Field */}
                <div className="mt-4">
                    <InputLabel forInput="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>
                {/* Street Address Field */}
                <div className="mt-4">
                    <InputLabel forInput="street_address" value="Street Address" />

                    <TextInput
                        id="street_address"
                        type="text"
                        name="street_address"
                        value={data.street_address}
                        className="mt-1 block w-full"
                        autoComplete="address-line1"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.street_address} className="mt-2" />
                </div>
                {/* Barangay Field */}
                <div className="mt-4">
                    <InputLabel forInput="barangay" value="Barangay" />

                    <TextInput
                        id="barangay"
                        type="text"
                        name="barangay"
                        value={data.barangay}
                        className="mt-1 block w-full"
                        autoComplete="address-line2"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.barangay} className="mt-2" />
                </div>
                {/* City Field */}
                <div className="mt-4">
                    <InputLabel forInput="city" value="City" />

                    <TextInput
                        id="city"
                        type="text"
                        name="city"
                        value={data.city}
                        className="mt-1 block w-full"
                        autoComplete="address-level2"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.city} className="mt-2" />
                </div>
                {/* Province Field */}
                <div className="mt-4">
                    <InputLabel forInput="province" value="Province" />

                    <TextInput
                        id="province"
                        type="text"
                        name="province"
                        value={data.province}
                        className="mt-1 block w-full"
                        autoComplete="address-level1"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.province} className="mt-2" />
                </div>
                {/* PostaL Code Field */}
                <div className="mt-4">
                    <InputLabel forInput="postal_code" value="Postal Code" />

                    <TextInput
                        id="postal_code"
                        type="text"
                        name="postal_code"
                        value={data.postal_code}
                        className="mt-1 block w-full"
                        autoComplete="postal_code"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.postal_code} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" processing={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
