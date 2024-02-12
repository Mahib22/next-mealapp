import Image from "next/image";
import InputSearch from "./InputSearch";

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

        <InputSearch />
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
