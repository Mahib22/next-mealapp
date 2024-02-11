import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const menus = ["home", "categories", "area", "ingredients"];

  return (
    <nav className="flex justify-between items-center flex-col md:flex-row pt-4">
      <Link href={"/"} className="uppercase font-bold text-xl">
        {process.env.app_name}
      </Link>

      <div className="flex items-center gap-4 md:gap-8 pt-4 md:pt-0">
        {menus.map((menu) => (
          <Link
            key={menu}
            href={`${menu == "home" ? "/" : `/${menu}`}`}
            className={`font-medium text-sm capitalize ${
              router.pathname == `${menu == "home" ? "/" : `/${menu}`}`
                ? "text-green-600 underline"
                : "text-gray-900 hover:text-green-600"
            }`}
          >
            {menu}
          </Link>
        ))}
      </div>
    </nav>
  );
}
