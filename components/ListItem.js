import Link from "next/link";

export default function ListItem(props) {
  return (
    <div className="py-4 md:py-6">
      <div className="flex justify-between items-center p-2">
        <h2 className="font-semibold text-xl">{props.title}</h2>

        <Link
          href={`/${props.link}`}
          className="font-medium text-sm text-gray-400 underline"
        >
          see more
        </Link>
      </div>

      <div className="flex overflow-x-auto">{props.children}</div>
    </div>
  );
}
