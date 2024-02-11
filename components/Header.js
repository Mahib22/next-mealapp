import Image from "next/image";

export default function Header() {
  return (
    <div className="container px-5 md:py-10 flex md:flex-row flex-col items-center">
      <div className="md:text-left text-center">
        <h1 className="text-3xl font-semibold mb-2">
          Taste Flavors from Around the World
        </h1>

        <p className="lg:w-2/3 text-lg leading-relaxed mb-8">
          Where culinary excellence meets a symphony of flavors, creating a
          harmonious dining experience for every palate.
        </p>

        <div className="flex flex-col md:flex-row gap-2 pb-16 md:pb-0">
          <input
            type="text"
            placeholder="Search a meal..."
            className="bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 outline-none py-2 px-3 transition-colors duration-200 ease-in-out"
          />
          <button className="text-white bg-green-500 border-0 py-2 px-8 hover:bg-green-600 rounded text-lg font-medium">
            Search
          </button>
        </div>
      </div>

      <div className="order-first md:order-last mb-8 md:mb-0">
        <Image
          src="/fast-food.svg"
          width={600}
          height={600}
          alt="header"
          priority
        />
      </div>
    </div>
  );
}
