import { RxDashboard } from "react-icons/rx";
import { FaUserGraduate } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { MdInventory } from "react-icons/md";

function SideBar() {
  return (
    <div className="h-full">
      <div className="flex flex-no-wrap h-screen">
        <div className="w-72 absolute sm:relative bg-gray-800 shadow flex-col justify-between flex h-screen">
          <div class="bg-gradient-to-r from-indigo-500 to-indigo-600 transform flex items-center py-8 px-6">
            <img
              class="rounded-full w-20 h-20 ring-4 ring-opacity-20 ring-gray-200"
              src="https://randomuser.me/api/portraits/men/38.jpg"
              alt="Tintu Mon"
            />
            <div class="ml-5">
              <h1 class="text-white tracking-wide text-lg">Tintu Mon</h1>
              <p class="text-gray-300 tracking-wider text-sm">Student</p>
            </div>
          </div>
          <div className="px-8">
            <ul className="mt-3">
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
                <a href="/" className="flex items-center focus:outline-none">
                  <RxDashboard />
                  <span className="text-sm ml-2">Dashboard</span>
                </a>
                <div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">
                  5
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                <a href="/" className="flex items-center focus:outline-none">
                  <FaUserGraduate />
                  <span className="text-sm ml-2">Profile</span>
                </a>
                <div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">
                  8
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center">
                <a href="/" className="flex items-center focus:outline-none">
                  <IoSettingsOutline />
                  <span className="text-sm ml-2">Settings</span>
                </a>
              </li>
            </ul>
            <div className="flex justify-center mt-44 mb-4 w-full"></div>
          </div>
          <div className="px-8 border-t border-gray-700">
            <ul className="w-full flex items-center justify-between bg-gray-800">
              <li className="cursor-pointer text-white pt-5 pb-3">
                <button
                  aria-label="show notifications"
                  className="focus:outline-none rounded"
                >
                  <FaBell />
                </button>
              </li>
              <li className="cursor-pointer text-white pt-5 pb-3">
                <button
                  aria-label="open chats"
                  className="focus:outline-none rounded"
                >
                  <IoIosChatboxes />
                </button>
              </li>
              <li className="cursor-pointer text-white pt-5 pb-3">
                <button
                  aria-label="open settings"
                  className="focus:outline-none rounded"
                >
                  <IoSettingsOutline />
                </button>
              </li>
              <li className="cursor-pointer text-white pt-5 pb-3">
                <button
                  aria-label="open logs"
                  className="focus:outline-none rounded"
                >
                  <MdInventory />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
