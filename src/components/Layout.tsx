import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div>
        <Header onMenuClick={() => setIsOpen(true)} />
        <main className="min-h-screen bg-gray-800">
          <Outlet />
        </main>
      </div>
    </>
  );
};
