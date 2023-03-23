import Link from "next/link";
import { useState, type FC } from "react";
import { BiMenuAltRight as MenuIcon } from "react-icons/bi";
import { AiOutlineClose as XIcon } from "react-icons/ai";
import Image from "next/image";

const Navbar: FC = () => {
  const links = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Rules",
      url: "#rules",
    },
    {
      label: "Contact",
      url: "#contact",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-10 w-full border-b border-gray-200 bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              className="rounded-full"
              src="/logo.png"
              alt="Logo"
              width={60}
              height={60}
              priority
            />
            <span className={`font-bold text-white`}>The Last Stand</span>
          </Link>

          <div className="hidden space-x-6 text-white lg:flex">
            {links.map((link) => (
              <Link
                className="transition-colors duration-300 hover:text-red-500"
                key={link.url}
                href={link.url}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 lg:hidden">
            {isMenuOpen ? (
              <XIcon className="h-6 w-6 text-white" onClick={toggleMenu} />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" onClick={toggleMenu} />
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div>
            {links.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="block py-2 px-4 text-sm text-white hover:bg-red-500"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
