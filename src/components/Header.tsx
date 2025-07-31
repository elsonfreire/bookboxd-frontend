import { MenuIcon } from "../assets/icons/MenuIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";

export const Header = () => {
  const handleOpenNavbar = () => {
    console.log("Open navbar");
  };

  const handleSearchOpen = () => {
    console.log("Open search");
  };

  return (
    <div className="flex bg-gray-900 p-4 w-full text-white font-bold text-xl gap-6">
      <button className="cursor-pointer" onClick={handleOpenNavbar}>
        <MenuIcon size={28} />
      </button>
      <div>Popular</div>
      <button className="ml-auto cursor-pointer" onClick={handleSearchOpen}>
        <SearchIcon size={28} />
      </button>
    </div>
  );
};
