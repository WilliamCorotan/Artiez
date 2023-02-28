// import '/assets/Artiez Logo.svg'
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import UserMenu from "./Admin/header/UserMenu";
import NavLink from "./NavLink";
import TextInput from "./TextInput";

const Navbar = ({ auth }) => {
    const [navOpen, setNavOpen] = useState(false);
    const [userNavOpen, setUserNavOpen] = useState(false);
    const navBar =
        "items-center justify-between block w-full md:flex md:w-auto ";
    const navBarClose =
        "items-center justify-between hidden w-full md:flex md:w-auto ";

    const asset = (path) => `${window.location.origin}/${path}`;
    const { data, setData, get, processing, errors, reset } = useForm({
        search: "",
    });

    return (
        <div className="border-rose-600 border-b-2">
            <nav class="bg-white  px-2 sm:px-4 py-2.5  lg:w-4/5 mx-auto">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <Link href="/" className="h-full flex items-center">
                        <img
                            src={asset("assets/Artiez-Full.svg")}
                            className="h-20 mr-1 "
                            alt="Artiez Logo"
                        />
                    </Link>

                    <div className="md:order-2">
                        {auth.user == null ? (
                            <ul className="flex space-x-6">
                                <li>
                                    <button
                                        data-collapse-toggle="mobile-menu-2"
                                        type="button"
                                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        aria-controls="mobile-menu-2"
                                        aria-expanded="false"
                                        onClick={() => {
                                            setNavOpen(!navOpen);
                                        }}
                                    >
                                        <span class="sr-only">
                                            Open main menu
                                        </span>
                                        <svg
                                            class="w-6 h-6"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        ) : (
                            <div class="relative flex items-center ">
                                <button
                                    type="button"
                                    class="flex mr-3 text-sm place-items-center rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    data-dropdown-toggle="user-dropdown"
                                    data-dropdown-placement="bottom"
                                    onClick={() => {
                                        setUserNavOpen(!userNavOpen);
                                    }}
                                >
                                    <span class="sr-only">Open user menu</span>
                                    <span class="mr-2">
                                        Hi,{" "}
                                        <span className="capitalize">
                                            {auth.user.first_name}
                                        </span>
                                    </span>
                                    <img
                                        className="w-12 h-12 rounded-full"
                                        src={asset(
                                            `./assets/profile_picture/${auth.user.profile_picture}`
                                        )}
                                        alt="User"
                                    />
                                </button>

                                <div
                                    class={`top-12 right-0 absolute ${
                                        userNavOpen ? "block" : "hidden"
                                    } z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}
                                    id="user-dropdown"
                                >
                                    <div class="px-4 py-3">
                                        <span class="block text-base text-gray-900 capitalize">
                                            {auth.user.first_name}
                                        </span>
                                        <span class="block text-sm font-medium text-gray-500 truncate ">
                                            {auth.user.email}
                                        </span>
                                    </div>
                                    <ul
                                        class="py-2"
                                        aria-labelledby="user-menu-button"
                                    >
                                        {auth.user == null ? (
                                            <ul className="flex space-x-6">
                                                <li>
                                                    <Link
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                                        href="/login"
                                                    >
                                                        Sign In
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                                        href="/register"
                                                    >
                                                        Signup
                                                    </Link>
                                                </li>
                                            </ul>
                                        ) : (
                                            <>
                                                <li>
                                                    <Link
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                                        href="/profile"
                                                    >
                                                        Settings
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                                        to="/"
                                                        href={route("logout")}
                                                        method="post"
                                                        as="button"
                                                    >
                                                        Sign Out
                                                    </Link>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                                <button
                                    data-collapse-toggle="mobile-menu-2"
                                    type="button"
                                    class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    aria-controls="mobile-menu-2"
                                    aria-expanded="false"
                                >
                                    <span class="sr-only">Open main menu</span>
                                    <svg
                                        class="w-6 h-6"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>

                    <div
                        class={`items-center justify-between ${
                            navOpen ? "block" : "hidden"
                        }  w-full md:flex md:w-auto md:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul class="grid gap-2 p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:grid-flow-col md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                            <li>
                                <NavLink
                                    href="/artworks"
                                    className="block text-lg py-2 pl-3 pr-4 rounded text-gray-800 hover:text-rose-600 hover:bg-gray-100  md:hover:bg-transparent md:hover:text-rose-600 md:p-0 "
                                    aria-current="page"
                                >
                                    All Artworks
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    href="/artists"
                                    className="block text-lg py-2 pl-3 pr-4 rounded text-gray-800 hover:text-rose-600 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-600 md:p-0 "
                                >
                                    Artists
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    href="/about"
                                    className="block text-lg py-2 pl-3 pr-4 text-gray-800 rounded hover:text-rose-600 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-600 md:p-0 "
                                >
                                    About
                                </NavLink>
                            </li>
                            {auth.user == null ? (
                                <>
                                    <li>
                                        <Link
                                            className="block text-lg py-2 pl-3 pr-4 text-gray-800 rounded hover:text-rose-600 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-600 md:p-0 "
                                            href="/login"
                                        >
                                            Sign In
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="block text-lg py-2 pl-3 pr-4 text-gray-800 rounded hover:text-rose-600 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-600 md:p-0 "
                                            href="/register"
                                        >
                                            Signup
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <></>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
