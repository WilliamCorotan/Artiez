import { useState } from "react";
import { Link } from "@inertiajs/react";
import {SideNavBar} from "@/Components/Admin/SideNavBar";


const Home = (props) => {

  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(false);


  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };


  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      <SideNavBar auth = {props.auth}/>
    </div>
  );
};

export default Home;