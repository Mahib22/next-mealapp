import { useRouter } from "next/router";
import { useState } from "react";

export default function InputSearch() {
  const router = useRouter();
  const [meal, setMeal] = useState("");

  const searchMeal = (e) => {
    e.preventDefault();
    router.push(`/search?s=${meal}`);
  };

  return (
    <form
      onSubmit={searchMeal}
      className="flex flex-col md:flex-row gap-2 pb-16 md:pb-0"
    >
      <input
        onChange={(e) => setMeal(e.target.value)}
        type="text"
        placeholder="Search a meal..."
        className="bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 outline-none py-2 px-3 transition-colors duration-200 ease-in-out"
      />
      <button
        type="submit"
        className="text-white bg-green-500 border-0 py-2 px-8 hover:bg-green-600 rounded text-lg font-medium"
      >
        Search
      </button>
    </form>
  );
}
