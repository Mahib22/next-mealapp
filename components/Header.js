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

        <div className="flex justify-center md:justify-start gap-4 pb-16 md:pb-0">
          <button className="text-white bg-green-500 border-0 py-2 px-8 hover:bg-green-600 rounded text-lg font-medium">
            Button
          </button>
          <button className="text-gray-700 bg-gray-200 border-0 py-2 px-8 hover:bg-gray-300 rounded text-lg font-medium">
            Button
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
