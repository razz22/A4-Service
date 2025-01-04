import Sidebar from "@/components/admin/Sidebar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="relative flex w-full">
        <Sidebar />
        <div className="relative w-full ml-[250px] pt-[66px]">
          <div className="w-full bg-white h-[65px] shadow-md flex px-3 items-center fixed top-0 left-0 z-50 ml-[250px]">
            <span className="text-sm text-slate-600">Dashboard</span>
          </div>
          {/* main content  */}
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
