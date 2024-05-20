import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.8] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <div>
      <a href={`https://coinmarketcap.com/`} target="_blank" rel="noreferrer">
            <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
          </a>
      </div>
      <div>
      <a href={`https://www.xe.com/currencyconverter/convert/?Amount=1&From=BTC&To=ETH`} target="_blank" rel="noreferrer">
            <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
          </a>
      </div>
      <div>
      <a href={`https://medium.com/meverse/stakeholders-in-the-crypto-ecosystem-fc16e9a91a10`} target="_blank" rel="noreferrer">
            <p className="text-white text-base text-center mx-2 cursor-pointer">ShareHolders</p>
          </a>
      </div>
      <div>
      <a href={`https://www.forbes.com/sites/digital-assets/article/crypto-investing-a-new-investors-guide/?sh=3ff571b535e7`} target="_blank" rel="noreferrer">
            <p className="text-white text-base text-center mx-2 cursor-pointer">Investors</p>
          </a>
      </div>
      <div>
      <a href={'https://www.udemy.com/topic/cryptocurrency/free/'} target="_blank" rel="noreferrer">
            <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
          </a>
      </div>
      <div>
      <a href={`https://crypto.com/research`} target="_blank" rel="noreferrer">
            <p className="text-white text-base text-center mx-2 cursor-pointer">Research</p>
          </a>
      </div>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
