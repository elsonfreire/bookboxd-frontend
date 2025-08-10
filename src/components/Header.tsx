import { MenuIcon } from "../assets/icons/MenuIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";

type HeaderProps = {
  onMenuClick: () => void;
};

export const Header = ({ onMenuClick }: HeaderProps) => {
  const handleSearchOpen = () => {
    console.log("Open search");
  };

  return (
    <>
      <div className="flex w-full gap-6 bg-gray-900 p-6 text-xl font-bold text-white">
        <button className="cursor-pointer md:hidden" onClick={onMenuClick}>
          <MenuIcon size={28} />
        </button>
        <div>Popular</div>
        <button className="ml-auto cursor-pointer" onClick={handleSearchOpen}>
          <SearchIcon size={28} />
        </button>
      </div>
    </>
  );
};
