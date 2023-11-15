import Link from "next/link";
import { LuUser, LuHome, LuFuel } from "react-icons/lu";

export const menuLinks = [
  {
    label: "Dashboard",
    address: "/",
    icon: <LuHome />,
  },
  {
    label: "Abastecimentos",
    address: "/supplies",
    icon: <LuFuel />,
  },
  {
    label: "Motoristas",
    address: "/drivers",
    icon: <LuUser />,
  },
];

const MenuSideBar = () => {
  return (
    <aside className="hidden md:flex h-screen px-6 py-10 flex-col justify-between max-w-[270px] bg-blue-300">
      <nav className="flex flex-col px-3 gap-3 text-white">
        {menuLinks.map((link) => (
          <Link
            key={link.label}
            href={link.address}
            className="flex items-center gap-2 text-xl hover:text-blue-200"
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default MenuSideBar;
