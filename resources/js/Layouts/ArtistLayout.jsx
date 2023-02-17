import { useState } from 'react';
import { SideNavBar } from '@/Components/Admin/SideNavBar';

export default function Layout({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [activeMenu, setActiveMenu] = useState(true);
    return (
        <>
        
        <div className="flex relative ">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <SideNavBar auth={auth}/>
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <SideNavBar auth={auth}/>
            </div>
          )}
          <main className={activeMenu ? " min-h-screen md:ml-72 w-full  ": " w-full min-h-screen flex-2 "}> {children} </main>
        </div>
            {/* <header><SideNavBar auth = {auth}/></header> */}
            
        </>
    );
}
