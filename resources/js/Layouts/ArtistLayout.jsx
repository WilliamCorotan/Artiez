import { useState } from 'react';
import Sidebar from '../Components/Admin/Sidebar';
import Header from '../Components/Admin/Header';
import { Footer } from '@/Components/Footer';


function ArtistLayout({auth, children}) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} auth={auth} />

        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default ArtistLayout;