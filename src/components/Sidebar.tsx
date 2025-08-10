type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-30 h-full bg-white p-32 shadow-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200`}
      ></div>
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-10"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};
