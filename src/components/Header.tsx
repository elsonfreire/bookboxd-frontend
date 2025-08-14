import { MenuIcon, SearchIcon } from "./icons/index";
import { navItems } from "../constants/navItems";

const Navbar = () => {
  return (
    <ul className="hidden md:flex ml-auto gap-4">
      {Object.keys(navItems).map((key) => (
        <li
          key={key}
          className="content-center uppercase opacity-80 hover:opacity-100"
        >
          <a href={navItems[key].path}>{key}</a>
        </li>
      ))}
    </ul>
  );
};

type HeaderProps = {
  onMenuClick: () => void;
};

export const Header = ({ onMenuClick }: HeaderProps) => {
  const handleSearchOpen = () => {
    console.log("Open search");
  };

  return (
    <>
      <div className="bg-gray-900 w-full flex text-white font-bold md:justify-center">
        <div className="flex gap-6 p-6 md:p-4 w-full md:w-2xl">
          <button className="cursor-pointer md:hidden" onClick={onMenuClick}>
            <MenuIcon size={28} />
          </button>
          <a href="/" className="text-2xl md:text-3xl">
            Bookboxd
          </a>
          <Navbar />
          <button
            className="ml-auto md:ml-0 cursor-pointer"
            onClick={handleSearchOpen}
          >
            <SearchIcon size={28} />
          </button>
        </div>
      </div>
    </>
  );
};
