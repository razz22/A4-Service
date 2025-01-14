import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeAdminToken } from "@/features/redux/slices/adminSlices/adminAuthSlice";
const ProfileMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeAdminToken());
  };
  return (
    <div className="relative">
      <Menu as="div" className="relative">
        <Menu.Button className="flex items-center w-[40px] h-[40px]">
          <img
            src="/images/admin/user.png"
            className="object-cover w-10 h-10 rounded-full"
            alt="User Avatar"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 w-56 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex flex-col items-center px-4 py-4">
              {/* Larger Profile Image */}
              <img
                src="/images/admin/user.png"
                alt="User Avatar"
                className="object-cover w-16 h-16 mb-2 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">
                John Doe
              </span>
              <span className="text-xs text-green-800">Admin</span>
            </div>
            <div className="pb-4 border-t border-gray-200">
              {/* Menu Items */}
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100" : ""
                    } flex items-center w-full px-4 py-2 text-sm text-gray-700`}
                  >
                    <FaUserCircle className="mr-2" />
                    Profile Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={`${
                      active ? "bg-gray-100" : ""
                    } flex items-center w-full px-4 py-2 text-sm text-gray-700`}
                  >
                    <FiLogOut className="mr-2" />
                    Log Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
