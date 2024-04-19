
import { FaXTwitter } from "react-icons/fa6";
import { BellIcon, BookmarkIcon, EllipsisHorizontalCircleIcon, EnvelopeIcon, HomeIcon, MagnifyingGlassIcon, UserIcon, UsersIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { IoMdListBox } from "react-icons/io";
import Link from "next/link";

export const Sidebar = () => {
 

  return (
    <aside className={` md:border-0 border-r-[1px] mborder-zinc-700 md:w-52 md:justify-end  transition-all duration-300 pt-5 flex  justify-between items-start  fixed top-0 z-50 bg-black overflow-auto h-screen`}>
      <ul className="flex flex-col gap-3  ">
        <li>
          <Link href={"/home"} className="">
            <div className="size-14 justify-center hover:bg-zinc-900 items-center flex  rounded-full transition-all duration-300">
              <FaXTwitter size={38} color="white" />
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/"} className="flex  items-center gap transition-all duration-300 p-2 hover:bg-zinc-900 rounded-xl gap-2   text-white ">
            <HomeIcon className="size-8 text-white" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href={"/"} className="flex   p-2 transition-all duration-300 hover:bg-zinc-900 rounded-xl  items-center gap-2 text-white ">
            <MagnifyingGlassIcon className="size-8 text-white" />
            <span>Search</span>
          </Link>
        </li>
        <li>
          <Link href={"/"} className="flex  items-center transition-all duration-300  hover:bg-zinc-900 rounded-xl p-2 gap-2  text-white">
            <BellIcon className="size-8 text-white" />
            <span>Notifcation</span>
          </Link>
        </li>
        <li>
          <Link href={"/"} className="flex items-center gap-2 text-white transition-all duration-300 p-2 hover:bg-zinc-900 rounded-xl">
            <EnvelopeIcon className="size-8 text-white " />
            <span>Messages</span>
          </Link>
        </li>
        <li>
          <Link href={"/"} className="flex items-center gap-2 text-white transition-all duration-300 p-2 hover:bg-zinc-900 rounded-xl">
            <IoMdListBox color="white" size={32} />
            <span>Lists</span>
          </Link>
        </li>
        <li>
          <Link href={"/"} className="flex items-center gap-2 text-white transition-all duration-300 p-2 hover:bg-zinc-900 rounded-xl">
            <BookmarkIcon className="size-8 text-white" />
            <span>Bookmarks</span>
          </Link>
        </li>
        <li>
          <Link href={"/"} className="flex items-center gap-2 text-white transition-all duration-300 p-2 hover:bg-zinc-900 rounded-xl">
            <UsersIcon className="size-8 text-white" />
            <span>Communities</span>
          </Link>
        </li>
        <li>
          <Link href={"/"} className="flex items-center gap-2 text-white transition-all duration-300 p-2 hover:bg-zinc-900 rounded-xl">
            <FaXTwitter size={32} color="white" />
            <span>Premium</span>
          </Link>
        </li>
        <li>
          <Link href={"/"} className="flex items-center gap-2 text-white transition-all duration-300 p-2 hover:bg-zinc-900 rounded-xl">
            <UserIcon className="size-8 text-white" />
            <span className="md:hidden lg:block">Profile</span>
          </Link>
        </li>
        <li>
          <Link href={"/"} className="flex items-center gap-2 text-white transition-all duration-300 p-2 hover:bg-zinc-900 rounded-xl">
            <EllipsisHorizontalCircleIcon className="size-8 text-white" />
            <span>More</span>
          </Link>
        </li>
      </ul>
      <button  className={`bg-zinc-900 md:hidden cursor-pointer mr-3 mt-3 text-white rounded-full`}>
        <XMarkIcon className="size-8" />
      </button>
    </aside>
  );
};
