import ArtistLayout from "@/Layouts/ArtistLayout"
import WelcomeBanner from "@/Components/Admin/WelcomeBanner";

import { Head } from "@inertiajs/react"
import {ArtworkCard} from "../../Components/Admin/ArtworkCard"
import {Link} from "@inertiajs/react"
import BarChart01 from "@/Components/Admin/charts/BarChart01";
import BarChart02 from "@/Components/Admin/charts/BarChart02";
import BarChart03 from "@/Components/Admin/charts/BarChart03";

const Dashboard = ({auth, artworks}) => {
  let soldArtworks = 0
  artworks.forEach((item)=>{
      soldArtworks = item.sold ? soldArtworks + 1 : soldArtworks
    })
  return (
    <>
    <Head title="Dashboard" />
    <ArtistLayout auth={auth} >
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner auth={auth}/>

            {/* Stats Cards */}
            <div className="grid sm:grid-flow-col sm:justify-between sm:items-center mb-12 gap-4">
              {/* Total artworks */}
              <div className="lg:col-span-4 bg-gradient-to-b  from-rose-200 to-rose-100 border-b-4 border-rose-500  rounded-sm shadow-xl p-5">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                  <i className="fa-solid fa-palette text-4xl text-rose-500"></i>
                  </div>
                  <div className="flex-1 text-right ">
                    <h5 className="font-bold uppercase text-gray-600">Total Artworks</h5>
                    <p className="font-bold text-2xl">
                      {artworks.length}
                      <span className="text-rose-500"> 
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Total sold */}
              <div className="lg:col-span-4 bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500  rounded-sm shadow-xl p-5">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                  <i className="fa-solid fa-palette text-4xl text-blue-500"></i>
                  </div>
                  <div className="flex-1 text-right ">
                    <h5 className="font-bold uppercase text-gray-600">Artworks Sold</h5>
                    <h3 className="font-bold text-2xl">
                      {soldArtworks}
                      <span className="text-blue-500"> 
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              {/* Total artworks */}
              <div className="lg:col-span-4 bg-gradient-to-b from-emerald-200 to-emerald-100 border-b-4 border-emerald-500  rounded-sm shadow-xl p-5">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                  <i className="fa-solid fa-palette text-4xl text-emerald-500"></i>
                  </div>
                  <div className="flex-1 text-right">
                    <h5 className="font-bold uppercase text-gray-600">Total Followers</h5>
                    <h3 className="font-bold text-2xl">
                      249
                      <span className="text-emerald-500"> 
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="relative grid gap-6">

              {/* Bar chart artworks */}
              <div className="relative grid col-span-full w-full h-fit bg-white shadow-lg rounded-sm border border-slate-200">
              <header className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">Artworks Sold per Art Style</h2>
              </header>

              <BarChart01 artworks={artworks}/>       

              </div>
              {/* Bar chart medium */}
              <div className="grid bg-white shadow-lg rounded-sm border border-slate-200">
              <header className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">Popular Media</h2>
              </header>

              <BarChart02 artworks={artworks}/>       

              </div>
              {/* Bar chart bases */}
              <div className="grid  w-full bg-white shadow-lg rounded-sm border border-slate-200">
              <header className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">Popular Bases</h2>
              </header>
              <BarChart03 artworks={artworks}/>       
              </div>

              <div className="relative border-t-2 p-4 pt-8 border-rose-200 ">
              {/* <h3 className="absolute -top-5 right-4 bg-white uppercase font-bold text-sm border-2 border-rose-200 rounded-full p-2">Latest Artworks</h3> */}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6">

              <Link href='/artist/artworks/add' className="lg:col-span-3 w-full h-36  mb-5 rounded-md shadow-lg border-2">

              </Link>
                {/* Total artworks */}
                {artworks.slice(0,3).map((item)=>{
                      return (
                            <ArtworkCard key={item.product_id} artworks={item} className="lg:col-span-3"/>
                      )
                  })}
              </div>
            </div>

          </div>
    </ArtistLayout>
    </>
  )
}

export default Dashboard