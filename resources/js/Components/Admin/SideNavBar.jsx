import NavLink from '@/Components/NavLink';
import { Link } from "@inertiajs/react"
import { useState } from "react";
import { links } from "@/Routes";

export const SideNavBar = (props) => {
  console.log(links)
   const [activeMenu, setActiveMenu] = useState(true);

   const handleCloseSideBar = () => {
      if (activeMenu !== undefined && screenSize <= 900) {
        setActiveMenu(false);
      }
    };

  console.log(props)
  const activeLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
const normalLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
<div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">

      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/artist/dashboard"
              onClick={handleCloseSideBar}
              className="items-center gap-3 mt-4 flex text-xl font-extrabold tracking-tighttext-slate-900"
            >
               <img src='../assets/temp.jpg' className="h-16 w-16 mr-1  rounded-full" alt="Artiez Logo" />
     <span className="self-center font-semibold whitespace-nowrap">{props.auth.user.first_name}</span>
            </Link>

     
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400m-3 mt-8 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    href={`${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    active={route().current(`${link.name}`)}
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
