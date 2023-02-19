import ArtistLayout from "@/Layouts/ArtistLayout"
import WelcomeBanner from "@/Components/Admin/WelcomeBanner";

import DashboardCard04 from "@/Components/Admin/DashboardCard04";
import DashboardCard06 from "@/Components/Admin/DashboardCard04";

import { Head } from "@inertiajs/react"
import {ArtworkCard} from "../../Components/Admin/ArtworkCard"
import {Link} from "@inertiajs/react"
import BarChart01 from "@/Components/Admin/charts/BarChart01";
import BarChart02 from "@/Components/Admin/charts/BarChart02";
import BarChart03 from "@/Components/Admin/charts/BarChart03";

const Gallery = ({auth, artworks}) => {
  let soldArtworks = 0
  artworks.forEach((item)=>{
      soldArtworks = item.sold ? soldArtworks + 1 : soldArtworks
    })
  return (
    <>
    <Head title="Dashboard" />
    <ArtistLayout auth={auth} >
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    {artworks.map((item)=>{
                      return (
                            <ArtworkCard key={item.product_id} artworks={item} className="lg:col-span-3"/>
                      )
                  })}
    </div>
    </ArtistLayout>
    </>
  )
}

export default Gallery