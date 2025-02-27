import React, { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";
import Link from "next/link";

const Dropdown = ({ menu }) => {
  const Icon = menu.icon;
  const [status, setStatus] = useState(false);
  return (
    <li
      className={`cursor-pointer mb-[2px] group`}
      onClick={() => setStatus(!status)}
    >
      <div
        className={`flex justify-between w-full py-[10px] px-3 rounded ${
          menu?.isSelected
            ? "bg-[#37a000] shadow-custom-green"
            : "bg-transparent"
        }`}
      >
        {menu?.submenu?.length > 0 ? (
          <div className="flex items-center gap-2">
            <Icon
              className={`${
                menu?.isSelected ? "text-white" : "text-[#a5a9ad]"
              } text-xl`}
            />
            <span
              className={`${
                menu?.isSelected ? "text-white" : "text-[#a5a9ad]"
              } text-sm transition-all`}
            >
              {menu?.name}
            </span>
          </div>
        ) : (
          <Link href={`${menu?.path}`}>
            <div className="flex items-center gap-2">
              <Icon
                className={`${
                  menu?.isSelected ? "text-white" : "text-[#a5a9ad]"
                } text-xl`}
              />
              <span
                className={`${
                  menu?.isSelected ? "text-white" : "text-[#a5a9ad]"
                } text-sm transition-all`}
              >
                {menu?.name}
              </span>
            </div>
          </Link>
        )}

        {menu?.submenu?.length != null && (
          <GoChevronDown
            className={`transition-all transform ${
              menu?.isSelected
                ? "rotate-90 text-white"
                : "rotate-0 text-[#a5a9ad]"
            }`}
          />
        )}
      </div>

      {/* Submenu */}
      {menu?.submenu?.length != null && (
        <div
          className={`w-full overflow-hidden transition-all duration-300 ${
            status ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-3 gap-[3px] list-disc list-inside py-[8px]">
            {menu?.submenu?.map((submenu) => (
              <Link key={submenu?.id} href={`${submenu?.path}`}>
                <li
                  className={`text-[12px]  ${
                    submenu?.isSelected ? "text-green-700" : "text-[#a5a9ad]"
                  } `}
                >
                  {submenu?.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default Dropdown;
