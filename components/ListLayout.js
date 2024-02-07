export default function ListLayout(props) {
  return (
    <>
      <div className="pt-4 md:pt-8">
        <div className="border-b">
          <h1 className="font-semibold text-2xl uppercase pb-2">
            {props.title}
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap py-8">{props.children}</div>
    </>
  );
}
