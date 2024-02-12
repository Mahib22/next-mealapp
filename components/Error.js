export default function Error({ message }) {
  return (
    <div className="container mx-auto flex justify-center py-12">
      <p className="font-bold text-xl uppercase">
        {message || "Failed to load data"}
      </p>
    </div>
  );
}
