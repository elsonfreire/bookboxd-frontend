import { navItems as navItems } from "../constants/navItems";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full shadow-lg bg-gray-800 text-white px-8 py-10 w-64 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200`}
      >
        <ul className="flex flex-col gap-4">
          {Object.keys(navItems).map((key) => {
            const currentItem = navItems[key];
            const Icon = currentItem.icon;

            return (
              <li key={key} className="flex text-2xl gap-6">
                <Icon />
                <a href={currentItem.path}>{key}</a>
              </li>
            );
          })}
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed bg-black z-20 inset-0 opacity-10"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};
