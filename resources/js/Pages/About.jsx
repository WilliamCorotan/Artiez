import { Footer } from "@/Components/Footer";
<<<<<<< HEAD
import Navbar from "@/Components/Navbar";

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="relative pt-8">
                <img
                    src="https://www.filipinoart.ph/img/slider/banner_aboutus.jpg"
                    alt=""
                />
                <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 italic">
                    About Us
                </h1>
            </div>
            <div className="container">
                <p className="text-center pt-10 sm:max-w-xl sm:mx-auto">
                    FilipinoArt is a Philippine-based online art gallery where
                    visitors can explore diversified Filipino artworks and
                    connect with a growing community of art enthusiasts and
                    patrons. During its launch in October 2019, FilipinoArt
                    primarily aimed to encourage local homeowners and art lovers
                    worldwide to support Filipino artists by buying their
                    original works.
                </p>
                <p className="text-center pt-10 sm:max-w-xl sm:mx-auto">
                    A first of its kind in the Philippines, where most
                    independent artists' works are showcased, FilipinoArt
                    features new entries every week. Its contemporary art
                    collection includes paintings, drawings, digital art
                    content, sculptures, photographs, and mixed media.
                </p>
                <p className="text-center pt-10 sm:max-w-xl sm:mx-auto">
                    FilipinoArt boasts a roster of nearly 300 artists from
                    across the Philippines and other cities around the world.
                    With a growing assortment of curated art pieces of over
                    1,100, the art gallery offers various art styles, subjects,
                    and themes.
                </p>
            </div>
            <div className="flex flex-col justify-center">
                <h1 className="pt-10 text-center text-2xl italic">
                    Shop Art Online
                </h1>
                <p className="text-center sm:max-w-xl sm:mx-auto">
                    FilipinoArt makes finding artists and artworks that you love
                    easy and fun! With its intuitive features, such as “view in
                    a room,” advanced search filters, and exploring artist by
                    styles, an artwork that looks amazing in your home or office
                    is just a few clicks away.
                </p>
                <ul className="pt-8">
                    <li className="py-3 sm:max-w-xl sm:mx-auto">
                        <h4 className="text-xl italic text-blue-500">
                            Select an Artwork
                        </h4>
                        <p>
                            Explore and choose from our vast collection of
                            original art pieces.
                        </p>
                    </li>
                    <li className="py-3 sm:max-w-xl sm:mx-auto">
                        <h4 className="text-xl italic text-blue-500">
                            View in a Room
                        </h4>
                        <p>
                            Zoom in and visualize your chosen artwork installed
                            in your home or office.
                        </p>
                    </li>
                    <li className="py-3 sm:max-w-xl sm:mx-auto">
                        <h4 className="text-xl italic text-blue-500">
                            Place Your Order
                        </h4>
                        <p>
                            Buy the original artwork or order canvas art prints
                            (except for sculptures) in various sizes. Framing
                            options available soon.
                        </p>
                    </li>
                    <li className="py-3 sm:max-w-xl sm:mx-auto">
                        <h4 className="text-xl italic text-blue-500">
                            Pay as You Go
                        </h4>
                        <p>
                            Explore and choose from our vast collection of
                            original art pieces.
                        </p>
                    </li>
                    <li className="py-3 sm:max-w-xl sm:mx-auto">
                        <h4 className="text-xl italic text-blue-500">
                            Pay as You Go
                        </h4>
                        <p>
                            Pay using your preferred method – bank card,
                            over-the-counter payment, GCash, and PayPal, among
                            others.
                        </p>
                    </li>
                    <li className="py-3 sm:max-w-xl sm:mx-auto">
                        <h4 className="text-xl italic text-blue-500">
                            Have it Delivered
                        </h4>
                        <p>
                            Enjoy a three-day money-back guarantee and free
                            shipping within the Philippines; receive your item
                            in good condition. Worldwide shipping is available,
                            too.
                        </p>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="pt-8 text-center text-2xl italic">Our Team</h1>
                <p className="text-center pt-5 sm:max-w-xl sm:mx-auto">
                    FilipinoArt is run daily by a small but mighty team whose
                    love for visual arts, digital technologies, and the
                    Philippines has been indisputable. Our team works endlessly
                    to give our stakeholders the premier representation (for
                    artists) and proactive customer service (for art
                    collectors). While the artist avails oneself of a safe
                    community and the opportunity to grow, the art collector, on
                    the other hand, gets the ideal art pieces fit for their
                    homes or business spaces.
                </p>
                <h1 className="pt-8 text-center text-2xl italic">
                    Behind the Scenes
                </h1>
                <p className="text-center pt-5 sm:max-w-xl sm:mx-auto">
                    A first of its kind in the Philippines, where most
                    independent artists' works are showcased, FilipinoArt
                    features new entries every week. Its contemporary art
                    collection includes paintings, drawings, digital art
                    content, sculptures, photographs, and mixed media.
                </p>
                <h1 className="mt-5 mb-5 sm:max-w-xl sm:mx-auto text-m italic text-blue-500">
                    Welcome to FilipinoArt
                </h1>
            </div>
            <Footer />
        </div>
    );
}
=======
import Layout from "@/Layouts/Layout";

export default function About({auth}) {

  return (
   <Layout auth={auth} className='leading-relaxed'>
    {/* Header Section */}
    <section className="relative h-64 w-screen">
      <img className="object-cover object-center h-full" src="https://www.filipinoart.ph/img/slider/banner_aboutus.jpg" alt="" />
      <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 italic">About Us</h1>
    </section>
    {/* About Us  */}
    <section className="w-4/5 mx-auto text-justify space-y-8 py-8 ">
      <p className=" sm:max-w-xl sm:mx-auto">Artiez is a Philippine-based online art gallery where visitors can explore diversified Filipino artworks and connect with a growing community of art enthusiasts and patrons. During its launch in October 2019, Artiez primarily aimed to encourage local homeowners and art lovers worldwide to support Filipino artists by buying their original works.</p>
      <p className="sm:max-w-xl sm:mx-auto">
      A first of its kind in the Philippines, where most independent artists' works are showcased, Artiez features new entries every week. Its contemporary art collection includes paintings, drawings, digital art content, sculptures, photographs, and mixed media.
      </p>
      <p className="sm:max-w-xl sm:mx-auto">Artiez boasts a roster of nearly 300 artists from across the Philippines and other cities around the world. With a growing assortment of curated art pieces of over 1,100, the art gallery offers various art styles, subjects, and themes.</p>
      <div>

      <h1 className="pt-8 text-center text-2xl italic">Behind the Scenes</h1>
      <p className="pt-5 sm:max-w-xl sm:mx-auto">A first of its kind in the Philippines, where most independent artists' works are showcased, Artiez features new entries every week. Its contemporary art collection includes paintings, drawings, digital art content, sculptures, photographs, and mixed media.</p>
      </div>
    </section>
    {/* Shop Online */}
    <section className="w-4/5 mx-auto border-t-2 border-gray-200 text-justify space-y-8 py-8">
      <h1 className="text-center text-rose-800 text-2xl italic">Shop Art Online</h1>
      <p className="text-center sm:max-w-xl sm:mx-auto">Artiez makes finding artists and artworks that you love easy and fun! With its intuitive features, such as “view in a room,” advanced search filters, and exploring artist by styles, an artwork that looks amazing in your home or office is just a few clicks away.</p>
      <ul className="pt-8">
        <li className="py-3 sm:max-w-xl sm:mx-auto">
          <h4 className="text-xl italic text-rose-700">Select an Artwork</h4>
          <p>Explore and choose from our vast collection of original art pieces.</p>
        </li>
        <li className="py-3 sm:max-w-xl sm:mx-auto">
          <h4 className="text-xl italic text-rose-700">View in a Room</h4>
          <p>Zoom in and visualize your chosen artwork installed in your home or office.</p>
        </li>
        <li className="py-3 sm:max-w-xl sm:mx-auto">
          <h4 className="text-xl italic text-rose-700">Place Your Order</h4>
          <p>Buy the original artwork or order canvas art prints (except for sculptures) in various sizes. Framing options available soon.</p>
        </li>
        <li className="py-3 sm:max-w-xl sm:mx-auto">
          <h4 className="text-xl italic text-rose-700">Pay as You Go</h4>
          <p>Explore and choose from our vast collection of original art pieces.</p>
        </li>
        <li className="py-3 sm:max-w-xl sm:mx-auto">
          <h4 className="text-xl italic text-rose-700">Pay as You Go</h4>
          <p>Pay using your preferred method – bank card, over-the-counter payment, GCash, and PayPal, among others.</p>
        </li>
        <li className="py-3 sm:max-w-xl sm:mx-auto">
          <h4 className="text-xl italic text-rose-700">Have it Delivered</h4>
          <p>Enjoy a three-day money-back guarantee and free shipping within the Philippines; receive your item in good condition. Worldwide shipping is available, too.</p>
        </li>
      </ul>
    </section>

    {/* Our team section */}
    <section className="w-4/5 mx-auto border-t-2 border-gray-200 text-justify space-y-8 py-8">
      <h1 className="pt-8 text-center text-2xl italic">Our Team</h1>
      <p className="pt-5 sm:max-w-xl sm:mx-auto">Artiez is run daily by a small but mighty team whose love for visual arts, digital technologies, and the Philippines has been indisputable. Our team works endlessly to give our stakeholders the premier representation (for artists) and proactive customer service (for art collectors). While the artist avails oneself of a safe community and the opportunity to grow, the art collector, on the other hand, gets the ideal art pieces fit for their homes or business spaces.</p>
    </section>
      <h1 className="mt-5 mb-5 sm:max-w-xl sm:mx-auto text-right italic text-rose-700">Welcome to Artiez</h1>

   </Layout>
  );
};
>>>>>>> f027d71f87160c308b62affe687f80a79505d126
