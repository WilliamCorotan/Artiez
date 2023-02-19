import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import ArtistLayout from '../../Layouts/ArtistLayout';

import { Head,Link } from '@inertiajs/react';



export default function Edit({ auth, mustVerifyEmail, status }) {
    console.log(auth)
    return (
        <AuthenticatedLayout
            auth={auth}
            // header={<h2 className="font-semibold text-xl ">My Account</h2>}
            
        >
            <Head title="Profile" />
 
            
           
            <ArtistLayout auth={auth}>
                <section className='py-1 '>
                <div className='w-full lg:w-8/12 px-4 mx-auto mt-6 '>
                   <div className='relative flex flex-col min-w-0 break-words w-full mb-6 '>
                    <div className='rounded-t  mb-0 px-6 py-6'>
                        <div className='text-center flex justify-between'>
                            <h1 className='text-blueGray-700 text-3xl font-bold'>Profile</h1>
                            <button className=' px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out '>Edit</button>
                        </div>
                    </div>

                    </div> 
                    <div className='flex-auto px-4 lg:px-10 py-10 pt-0 '>
                    <form>
                        <h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase '>My Account</h6>
                        
                        <div className='flex flex-wrap'>
                          <div className='w-full lg:w-6/12 px-4'>
                        <div className='relative w-full mb-3'>
                        <label htmlFor="" className='block uppercase text-blueGray-600 text-xs font-bold mb-2'>UserName</label> 
                        <input type="text" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' value={auth.user.first_name}/>   
                            
                        </div>    
                        </div>
                        <div className='w-full lg:w-6/12 px-4'>
                            <div className='relative w-full mb-3'>
                        <label htmlFor="" className='block uppercase text-blueGray-600 text-xs font-bold mb-2'>Email address</label>
                        <input type="email" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' value={auth.user.email} />
                            </div>
                        </div>
                        <div className='w-full lg:w-6/12 px-4'>
                            <div className='relative w-full mb-3'>
                            <label htmlFor="" className='block uppercase text-blueGray-600 text-xs font-bold mb-2'>firstName</label>
                            <input type="text" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' value={auth.user.first_name} />
                            </div>
                        </div>
                        <div className='w-full lg:w-6/12 px-4'>
                            <div className='relative w-full mb-3'>
                                <label htmlFor="" className='block uppercase text-blueGray-600 text-xs font-bold mb-2'>LastName</label>
                                <input type="text" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' value={auth.user.last_name} />
                            </div>
                        </div>
                        </div>
                        <hr className='mt-6 border-b-1 border-blueGray-300' />
                        <h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>Contact Information</h6>
                        <div className='flex flex-wrap'>
                           <div className='w-full lg:w-12/12 px-4'>
                            <div className='relative w-full mb-3'>
                                <label htmlFor="" className='block uppercase text-blueGray-600 text-xs font-bold mb-2'>Address</label>
                                <input type="text" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' value={auth.user.street_address} />
                            </div>
                            </div>
                            <div className='w-full lg:w-12/12 px-4'>
                        <div className='relative w-full mb-3'>
                           <label htmlFor="" className='block uppercase text-blueGray-600 text-xs font-bold mb-2'>Barangay</label>
                           <input type="email" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' value={auth.user.barangay} />
                            </div>        
                        </div>
                        <div className='w-full lg:w-4/12 px-4'>
                        <div className='relative w-full mb-3'>
                        <label htmlFor="" className='block uppercase text-blueGray-600 text-xs font-bold mb-2'>Province</label>
                        <input type="text" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' value={auth.user.province} />
                        </div>    
                        </div> 
                        <div className='w-full lg:w-4/12 px-4'>
                          <div className='relative w-full mb-3'>
                            <label htmlFor="" className='block uppercase text-blueGray-600 text-xs font-bold mb-2'>City</label>
                            <input type="text" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' value={auth.user.city} />
                            </div>  
                        </div>
                        </div>
                        <button className='mt-5 ml-5 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out '>Delete</button>
                    </form>    
                    </div> 
                </div>
                </section>
            </ArtistLayout>
       
            
       
        </AuthenticatedLayout>
    );
}
