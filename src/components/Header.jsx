import { Link, useLocation } from "react-router-dom";
import Button from "./subComponents/Button";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Header = () => {

    const { pathname } = useLocation();

    const [showNav, setShowNav] = useState(false);

    const handleNavToggle = () => {

        showNav ? setShowNav(false) : setShowNav(true);
    }

    return (
        <div className='w-full h-[70px]
         bg-white flex justify-between 
         items-center shadow-sm font-semibold px-2'>
            <Link to={"/"} className='text-3xl inline-block
            font-bold 
             text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400'>
                Profilize
            </Link>
            <nav className={`max-md:w-[100%] max-md:h-[100%] max-md:text-xl 
            max-md:fixed max-md:top-[70px] max-md:py-16
            ${!showNav ? "max-md:left-[-100%]" : "max-md:left-[0]"} max-md:flex-col max-md:justify-normal  
            max-md:bg-white transition-all
            z-30 flex gap-5 text-gray-800 items-center justify-center`}>

                <div>Resume Templates</div>
                <div>Resume Example</div>
                <div className="flex gap-4 max-w-fit">


                    <div  className="border-2 px-4 py-2 min-w-fit border-yellow-300 rounded-xl hover:border-pink-400 font-bold cursor-pointer select-none hidden">Log In</div>
                    <div className="border-2 px-4 py-2 min-w-fit border-yellow-300 rounded-xl hover:border-pink-400 font-bold cursor-pointer select-none hidden">Sign Up</div>


                </div>

            </nav >

            {
                !(pathname === "/editor") && <Link to={"/editor"} className="inline-block min-w-fit max-sm:text-[0.7rem]"><Button /></Link>
            }
            {
                <div>
                    {showNav ? <MdClose onClick={handleNavToggle} className="mx-2 font-bold cursor-pointer text-2xl" />
                        :
                        <FaBarsStaggered onClick={handleNavToggle} className="mx-2 md:hidden cursor-pointer text-2xl" />}
                </div>
            }
        </div >
    );
}

export default Header;
