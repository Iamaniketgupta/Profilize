import ItemsContainer from "./ItemContainer.jsx";
import SocialIcons from "./SocialIcons.jsx";
import { Icons } from "./Menus.jsx";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">Free</span> for Everyone
    
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your ph.no"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-gradient-to-r from-pink-500 to-yellow-400 duration-300 px-5 py-2.5 font-sans
           rounded-md text-white md:w-auto w-full font-bold"
          >
            Request Code
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2026 Profilize. Developed by Aniket Gupta </span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;