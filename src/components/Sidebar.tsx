type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full shadow-lg bg-white p-32 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200`}
      ></div>
      {isOpen && (
        <div
          className="fixed bg-black z-20 inset-0 opacity-10"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};
