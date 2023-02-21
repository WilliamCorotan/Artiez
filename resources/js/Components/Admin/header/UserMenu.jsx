import { useState, useRef, useEffect } from "react";
import { Link } from "@inertiajs/react";

function UserMenu({ auth }) {
    const asset = (path) => `${window.location.origin}/${path}`;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef(null);

    return (
        <div className="relative inline-flex text-lg">
            <button
                ref={trigger}
                className="inline-flex justify-center items-center group"
                aria-haspopup="true"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
            >
                <img
                    className="w-10 h-10 rounded-full"
                    src={asset(`./assets/profile_picture/temp.jpg`)}
                    alt="User"
                />
                <div className="flex items-center truncate">
                    <span className="truncate ml-2 text-xl font-medium group-hover:text-slate-800">
                        My Profile
                    </span>
                </div>
            </button>

            <div>
                <div
                    className={`origin-top-right z-10 absolute top-full right-0 w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
                        dropdownOpen ? "block" : "hidden"
                    }`}
                >
                    <div className=" pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
                        <div className="font-medium text-slate-800">
                            {auth.user.first_name}
                        </div>
                    </div>
                    <ul>
                        <li>
                            <Link
                                className="font-medium text-lg text-rose-500 hover:text-rose-600 flex items-center py-1 px-3"
                                href="/profile"
                            >
                                My Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="font-medium text-lg text-rose-500 hover:text-rose-600 flex items-center py-1 px-3"
                                to="/"
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Sign Out
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UserMenu;
