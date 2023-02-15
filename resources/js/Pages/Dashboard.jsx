import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import axios from 'axios';

export default function Dashboard(props) {

    console.log(props)
    const data  = props.products
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Welcome back {props.auth.user.first_name}</div>
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>

            {data.map((e)=>{ 
            
            return (
            
            <>
            <div class="transition ease-in-out delay-15 hover:-translate-y-0.5 hover:scale-110 hover:bg-white duration-300 rounded-3xl shadow-lg border-2 max-w-sm">
                <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                >
                    <img
                        class="rounded-t-2xl"
                        src="/public/assets/artwork/art3.avif"
                        alt=""
                    />
                </a>
                <div class="p-4 table-fixed">
                    <h5 class="text-gray-800 text-xl font-semibold">{e.product_name}</h5>
                    <p class="text-gray-700 text-base mb-2">
                        <span>{`${e.medium} on ${e.base}`}</span> |
                        <span>{`${e.height}h x ${e.width}w in`}</span>
                    </p>
                    <div class="flex items-center justify-between">
                        <h6 class="text-gray-800 text-lg font-medium mb-2">
                            {e.first_name} {e.last_name}
                        </h6>
                        <h4 class="font-semibold">PHP {e.price}</h4>
                    </div>
                    <p class="text-gray-700">
                        <span>{e.city}, {e.province}</span>
                    </p>
                </div>
            </div>
            </>
            )})}
        </AuthenticatedLayout>
    );
}
