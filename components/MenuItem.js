import Image from "next/image";
import Link from "next/link";

export default function MenuItem({ id, title, img, pages }) {
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full p-4 grid justify-items-center">
      <Link
        href={`/${pages}/${id}`}
        className="w-48 h-48 rounded-full overflow-hidden"
      >
        <Image
          width={200}
          height={200}
          alt={title}
          className="object-cover object-center"
          src={img}
          priority
        />
      </Link>
      <div className="mt-4">
        <h2 className="text-lg font-medium text-center">{title}</h2>
      </div>
    </div>
  );
}
