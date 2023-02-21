import { Link } from "@inertiajs/react";

export default function NavLink({ href, active, children, className }) {
    return (
        <Link
            href={href}
            className={
                // active
                //     ? "flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
                //     : "flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                active
                    ? `block text-lg py-2 pl-3 pr-4 text-rose-400 hover:text-rose-600  hover:border-b-2
                hover:border-rose-600 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out ${className}`
                    : `block text-lg py-2 pl-3 pr-4  text-gray-600 hover:text-rose-600
                hover:border-b-2 hover:border-rose-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out  ${className}`
            }
        >
            {children}
        </Link>
    );
}
