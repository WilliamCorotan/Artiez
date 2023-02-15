// import '/assets/Artiez Logo.svg' 

const Navbar = () => {
  return (
    <>
<header class="text-red-800">
    <div class="container mx-auto flex flex-wrap items-center justify-evenly gap-10">
        <a href="#"
            ><img
                class="h-20 flex items-center"
                src="assets/Artiez.svg"
                alt="Artiez Logo"
        /></a>
        <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-end p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
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
        <div
            class="hidden w-full md:block md:w-auto"
            id="navbar-default"
        >
            <ul class="flex flex-col md:flex-row md:gap-5">
                <li><a href="#">All Artworks</a></li>
                <li><a href="#">Artists</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>

        <div class="flex">
            <div class="xl:w-96">
                <div class="input-group flex">
                    <input
                        type="search"
                        class="form-control sm:min-w-0 block md:w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-red-900 rounded-l-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                        placeholder="Search by artwork, artist, or style"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                    />
                    <button
                        class="btn px-6 py-2.5 bg-red-800 text-white font-medium text-xs leading-tight uppercase rounded-r-lg rounded-l-none hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none transition duration-150 ease-in-out flex items-center"
                        type="button"
                        id="button-addon2"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="search"
                            class="w-4"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex items-center ml-5 gap-5">
                <a href="#"> <i class="fa-solid fa-user"></i></a>
                <a href="#"><i class="fa-solid fa-cart-plus"></i> </a>
            </div>
        </div>
    </div>
</header>

    </>
  )
}

export default Navbar