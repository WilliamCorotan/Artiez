import { Link } from "@inertiajs/react"

export const SideNavBar = (props) => {
  console.log(props)
  const activeLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
const normalLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <>
<button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
  <span className="sr-only">Open sidebar</span>
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
     <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
  </svg>
</button>

<aside id="separator-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  <div className="my-8">
  <Link href="#" className="flex items-center pl-2.5 mb-5">
    <img src='../assets/temp.jpg' className="h-10 w-10 mr-3  rounded-full" alt="Artiez Logo" />
    <span className="self-center text-xl font-semibold whitespace-nowrap">{props.auth.user.first_name}</span>
 </Link>
  </div>

  <div className="h-full px-3 py-4 bg-gray-50">
     <ul className="space-y-2">
        <li className="py-2">
           <Link href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100">
               <i className="fa-solid fa-house text-lg group-hover:text-black"></i>
               <span className="ml-3">Dashboard</span>
           </Link>
        </li>
        <li className="py-2">
           <Link href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100">
            <i className="fa-solid fa-chart-line text-lg group-hover:text-black"></i>
              <span className="flex-1 ml-3 whitespace-nowrap">Activities</span>
              {/* {{-- <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> --}} */}
           </Link>
        </li>
       
        
     </ul>
     <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200">
        <li className="py-2">
           <Link href="#" className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100  group">
            <i className="fa-solid fa-images text-lg"></i>
              <span className="ml-4">Gallery</span>
           </Link>
        </li>
        <li className="py-2">
           <Link href="#" className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100  group">
            <i className="fa-solid fa-clipboard text-xl"></i>
              <span className="ml-5">Orders</span>
           </Link>
        </li>
        <li className="py-2">
           <Link href="#" className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100  group">
            <i className="fa-solid fa-cart-shopping text-lg"></i>
              <span className="ml-4">Sold Artworks</span>
           </Link>
        </li>

     </ul>
     {/* {{-- Configuration Section --}} */}
     <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 grid">
      <li className="py-2">
         <Link href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
            <i className="fa-solid fa-user"></i>
             <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>

         </Link>
      </li>
        
      <li className="py-2">
         <Link href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
            <i className="fa-solid fa-gear"></i>
            <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
            {/* {{-- <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ">3</span> --}} */}
         </Link>
      </li>
        <li className="py-2 ">
           <Link href="#" className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100  group">
            <i className="fa-solid fa-right-from-bracket"></i>
              <span className="ml-3">Logout</span>
           </Link>
        </li>
     </ul>
  </div>
</aside>
    </>
  )
}
