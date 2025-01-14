import Sidebar from "@/components/admin/Sidebar";
import React from "react";
import ProfileMenu from "@/components/admin/ProfileMenu";
const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="relative flex w-full">
        <Sidebar />
        <div className="relative w-full ml-[250px] pt-[66px] z-10">
          <div className="w-full bg-white h-[65px] shadow-md flex justify-between px-4 items-center fixed top-0 left-0 z-50 pl-[250px]">
            <span className="ml-2 text-sm text-slate-600">Dashboard</span>

            <ProfileMenu />
          </div>
          {/* main content  */}
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
