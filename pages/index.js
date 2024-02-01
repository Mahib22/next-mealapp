import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <Layout title="MEALAPP">
      <div className="bg-gray-100">
        <div className="container md:p-24 px-6 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-2xl font-medium mb-4">
              Taste Flavors from Around the World
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed">
              Where culinary excellence meets a symphony of flavors, creating a
              harmonious dining experience for every palate.
            </p>
          </div>
          <div className="flex lg:w-3/5 w-full sm:flex-row flex-col mx-auto sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <input
                type="text"
                name="full-name"
                placeholder="Search Ingredient..."
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap">
          {data.map((item) => (
            <div
              className="p-2 md:p-4 md:w-1/2 lg:w-1/3 w-full"
              key={item.idIngredient}
            >
              <Link
                href={`/ingredients/${item.strIngredient.toLowerCase()}`}
                className="flex rounded-lg h-full bg-indigo-100 p-8 flex-col"
              >
                <h2 className="text-lg font-semibold">{item.strIngredient}</h2>
                <p className="leading-relaxed line-clamp-3 pt-2">
                  {item.strDescription ? item.strDescription : "-"}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i="
  );
  const data = await res.json();

  return {
    props: {
      data: data.meals,
    },
  };
}
