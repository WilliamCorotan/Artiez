import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

import { Head,Link } from '@inertiajs/react';



export default function Edit({ auth, mustVerifyEmail, status }) {
    console.log(auth)
    return (
        <AuthenticatedLayout
            auth={auth}
            // header={<h2 className="font-semibold text-xl ">My Account</h2>}
            
        >
            <Head title="Profile" />
 
            
            {/* <div className='fixed  top-26  w-64 text-white bg-red-900 '>
                <a href="#" className='p-4 flex flex-col items-center gap-4 '>
                    <img src="" className='w-16 aspect-square object-cover rounded' alt="" />
            <div>
                <h3 className='text-lg '>{auth.user.first_name} {auth.user.last_name}</h3>
            </div>
                </a>
                <div className='py-4 text-dark'>
                <span className='text-sm text-gray-500 uppercase ml-4 inline-block mb-2'>Menu</span>
                <ul className='flex flex-col gap-4 py-2 pl-3 pr-4 '>
                    <li className='font-medium text-lg border-1-4 border-transparent '>
                        <a href="#">
                        <i class="mr-2 fa-solid fa-user"></i>
                            Profile 
                        </a>
                    </li>
                    <li className='font-medium text-lg border-1-4 border-transparent '>
                        <a href="#">
                        <i class="mr-2 fa-solid fa-user-check"></i>
                            Following
                        </a>
                    </li>
                    <li className='font-medium text-lg border-1-4 border-transparent'>
                        <a href="#">
                        <i class="mr-2 fa-solid fa-note-sticky"></i>
                            Orders
                        </a>
                    </li>
                    <li className='font-medium text-lg border-1-4 border-transparent '>
                        <a href="#">
                        <i class="mr-2 fa-solid fa-location-dot"></i>
                            Address
                        </a>
                    </li>
                    <li className=' font-medium text-lg border-1-4 border-transparent '>
                        <a href="#">
                        <i class="mr-2 fa-solid fa-hand-holding-heart"></i>
                            Wishlist
                        </a>
                    </li>
                </ul>
                </div>
            </div>
            <div className='pl-64 fixed ' id='main'>
                <div className=''>
                   <div className='h-14 w-screen py-1 px-4 text-dark shadow  top-0 left-0 z-50'>
                    <div className='flex items-center h-full gap-12 '>
                     <a href="#" className='flex items-center gap-4'>
                        <span className='text-2xl '>Profile</span>
                        
                    </a> 
                  <a href= {route("profile.edit")} >Edit</a>
                    </div>
                    </div> 
                    <hr />
           <div className='relative overflow-x-auto  '>
            <table className='w-full bg-neutral-200 text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'></thead>
                <tbody>
                    <tr className=''>
                        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
                            FirstName
                        </th>
                        <td className='px-6 py-4 text-dark text-gray-900'>
                        {auth.user.first_name}
                        </td>
                    </tr>
                    <tr className=''>
                        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark'>
                            LastName
                        </th>
                        <td className='px-6 py-4 text-dark text-gray-900'>
                        {auth.user.last_name}
                        </td>
                    </tr>
                    <tr className=''>
                        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark'>
                            contactNumber
                        </th>
                        <td className='px-6 py-4 text-dark text-gray-900'>
                        {auth.user.last_name}
                        </td>
                    </tr>
                    <tr className=''>
                        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark'>
                            Email
                        </th>
                        <td className='px-6 py-4 text-dark text-gray-900'>
                        {auth.user.email}
                        </td>
                    </tr>
                    <tr className=''>
                        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark'>
                            Street_address
                        </th>
                        <td className='px-6 py-4 text-dark text-gray-900'>
                        {auth.user.street_address}
                        </td>
                    </tr>
                    <tr className=''>
                        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark'>
                            Barangay 
                        </th>
                        <td className='px-6 py-4 text-dark text-gray-900'>
                        {auth.user.barangay}
                        </td>
                    </tr>
                    <tr className=''>
                        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark'>
                            City
                        </th>
                        <td className='px-6 py-4 text-dark text-gray-900'>
                        {auth.user.city}
                        </td>
                    </tr>
                    <tr className=''>
                        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark'>
                            Province
                        </th>
                        <td className='px-6 py-4 text-dark text-gray-900'>
                        {auth.user.province}
                        </td>
                    </tr>
                    <tr className=''>
                        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark'>
                            City
                        </th>
                        <td className='px-6 py-4 text-dark text-gray-900'>
                        {auth.user.city}
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <button type='button' className='mt-4 ml-4 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Delete</button>    
            
                </div>
               
            </div> */}
       
            
       
        </AuthenticatedLayout>
    );
}
