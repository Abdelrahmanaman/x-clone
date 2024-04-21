"use client";
import Link from "next/link";
import Image from "next/image";
import { FcSettings } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { useMenuOpen } from "../../hooks/store";
const Header = () => {
  const pathname = usePathname();
  const isMenuOpen = useMenuOpen((state) => state.menuOpen);
  const handleOpenMenu = useMenuOpen((state) => state.handleOpenMenu);

  return (
    <header className="bg-black px-4 py-2 flex flex-col gap-4 border-b-2 border-zinc-900">
      <div className="flex justify-between items-center md:hidden">   
        <button onClick={handleOpenMenu}  className="rounded-full border-2 border-black">
          <Image className="rounded-full" src="/default-profile.svg" alt="Profile Image" width={40} height={40} />
        </button>
        <Link href={"/"}>
            <BsTwitterX className="size-7 text-white" />
        </Link>
        <Link href={"/setting"}>
            <FcSettings className="size-7" />
        </Link>
      </div>
      <div className="flex gap-2 text-white justify-between items-center">
        <Link className={`${pathname === "/foryou" ? "underline decoration-primary underline-offset-8 decoration-4" : ""} w-full text-center rounded-md hover:bg-zinc-900 py-2`} href={"/foryou"}>
          <span>For you</span>
        </Link>
        <Link className={`${pathname === "/following" ? "underline decoration-primary underline-offset-8 decoration-4" : ""} w-full text-center rounded-md hover:bg-zinc-900 py-2`} href={"/following"}>
          <span>Following</span>
        </Link>
        <FcSettings className="size-10 hidden lg:block" />
      </div>
    </header>
  );
};

export default Header;
