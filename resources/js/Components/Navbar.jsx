// import '/assets/Artiez Logo.svg'
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import UserMenu from "./Admin/header/UserMenu";
import NavLink from "./NavLink";
import TextInput from "./TextInput";

const Navbar = ({ auth }) => {
    const [navOpen, setNavOpen] = useState(false);
    const navBar =
        "items-center justify-between block w-full md:flex md:w-auto ";
    const navBarClose =
        "items-center justify-between hidden w-full md:flex md:w-auto ";

    const asset = (path) => `${window.location.origin}/${path}`;
    const { data, setData, get, processing, errors, reset } = useForm({
        search: "",
    });
    const submit = (e) => {
        e.preventDefault();
        get("/artworks", data.search);
    };

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };
    return (
        <>
            <nav className="bg-white border-b border-rose-600 px-2 sm:px-4 py-2.5 rounded ">
                {/* Parent Container */}
                <div className="w-full mx-auto flex flex-wrap items-center justify-between ">
                    {/* Logo */}
                    <div className="mx-8">
                        <Link href="/" className="h-full flex items-center">
                            <img
                                src={asset("assets/Artiez-Full.svg")}
                                className="h-20 mr-1 "
                                alt="Artiez Logo"
                            />
                        </Link>
                    </div>
                    {/* Search bar */}
                    <div className="flex ">
                        <div className="relative hidden md:block">
                            <form onSubmit={submit}>
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-gray-600"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="sr-only">Search icon</span>
                                </div>
                                <TextInput
                                    type="text"
                                    name="search"
                                    value={data.search}
                                    className="p-2 pl-10 pr-32 text-sm text-gray-900 border border-rose-600 rounded-sm bg-gray-50 focus:ring-rose-900 focus:border-rose-600"
                                    placeholder="Search"
                                    handleChange={onHandleChange}
                                />
                            </form>
                        </div>

                        <button
                            onClick={() => {
                                setNavOpen(!navOpen);
                            }}
                            data-collapse-toggle="navbar-search"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-rose-600 rounded-full md:hidden hover:bg-gray-100 focus:outline-none  focus:bg-rose-600 focus:text-white "
                            aria-controls="navbar-search"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Responsive MenuBar */}
                    <div
                        className={navOpen ? navBar : navBarClose}
                        id="navbar-search"
                    >
                        <ul className="flex flex-col  p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
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
                        </ul>
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-500"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <TextInput
                                type="text"
                                id="search-navbar"
                                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-rose-700 focus:border-rose-600"
                                placeholder="Search..."
                            />
                        </div>
                    </div>

                    <div>
                        {auth.user == null ? (
                            <ul className="flex space-x-6">
                                <li>
                                    <NavLink
                                        href="/login"
                                        className="block text-lg py-2 pl-3 pr-4 text-gray-800 rounded hover:text-rose-600 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-600 md:p-0 "
                                    >
                                        Sign in
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/register"
                                        className="block text-lg py-2 pl-3 pr-4 text-gray-800 rounded hover:text-rose-600 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-600 md:p-0 "
                                    >
                                        Sign up
                                    </NavLink>
                                </li>
                            </ul>
                        ) : (
                            <UserMenu auth={auth}></UserMenu>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
