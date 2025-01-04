import React, { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";
import { RiListSettingsLine } from "react-icons/ri";
import { ImCogs } from "react-icons/im";
import Dropdown from "./Dropdown";
import { ImExit } from "react-icons/im";
import { useDispatch } from "react-redux";
import { removeAdminToken } from "@/features/redux/slices/adminSlices/adminAuthSlice";
const Sidebar = () => {
  const dispatch = useDispatch();

  const [menus, setMenus] = useState([
    {
      id: 1,
      name: "Dashboard",
      icon: IoHomeSharp,
      submenu: null,
    },
    {
      id: 2,
      name: "Services",
      icon: RiListSettingsLine,
      submenu: [
        { id: 11, name: "List" },
        { id: 22, name: "Add Service" },
      ],
    },
    {
      id: 3,
      name: "Settings",
      icon: ImCogs,
      submenu: [
        { id: 23, name: "App Settings" },
        { id: 24, name: "Profile Settings" },
      ],
    },
  ]);

  const handleLogout = () => {
    dispatch(removeAdminToken());
  };

  return (
    <>
      <div className="w-[250px] h-screen fixed left-0 top-0">
        <div className="w-full h-full bg-[#1C1F22] relative">
          {/* sidebar logo area  */}

          <div className="flex flex-col w-full gap-8 px-3 py-5 border-b border-gray-600">
            <img src="/images/admin/logo.png" className="w-[150px]" alt="" />
            <div className="flex items-center w-full gap-2">
              <img
                src="/images/admin/user.png"
                className="object-cover w-10 h-10 rounded-full"
                alt=""
              />
              <div className="flex flex-col">
                <span className="text-sm text-white">Readul Ahmed</span>
                <span className="text-[11px] text-[#a5a9ad]">
                  readul785@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* menus  */}

          <div className="w-full px-2 my-3">
            <div className="w-full px-3 mt-2 mb-4">
              <span className="text-[11px] text-slate-400">MAIN MENU</span>
            </div>

            <div className="flex flex-col h-[650px] flex-1 justify-between">
              <ul>
                {menus?.map((menu) => (
                  <Dropdown key={menu.id} menu={menu} />
                ))}
              </ul>

              <div className="w-full">
                <ul className="px-3">
                  <li
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={handleLogout}
                  >
                    {" "}
                    <ImExit className="text-[#a5a9ad] text-xl" />{" "}
                    <span className="text-[12px] text-[#a5a9ad]">Logout</span>
                  </li>
                </ul>

                <div className="absolute flex items-center gap-2 mt-5 bottom-3 left-5">
                  <span className="text-[#5F9501] text-[9px]">
                    A4 Service App --
                  </span>
                  <span className="text-[#5F9501] text-[9px]">
                    Version 1.1.0
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
