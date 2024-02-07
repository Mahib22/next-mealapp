import Link from "next/link";

export default function CardItem({ title, desc, pages }) {
  return (
    <div className="p-2 w-full lg:w-1/3 md:w-1/2">
      <Link
        href={`/${pages}/${title.toLowerCase().replace(/\s/g, "-")}`}
        className="flex rounded-lg h-full bg-green-100 p-8 flex-col"
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="leading-relaxed line-clamp-3 pt-2">{desc ? desc : "-"}</p>
      </Link>
    </div>
  );
}
