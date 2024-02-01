import Link from "next/link";

export default function Breadcrumb({ children }) {
  return (
    <div className="text-sm font-medium flex gap-2 items-center">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <span>/</span>
      {children}
    </div>
  );
}
