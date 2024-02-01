import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function IngredientDetail({ data }) {
  const router = useRouter();

  return (
    <Layout title={`List of meals made from ${router.query.id}`}>
      <div className="bg-gray-100">
        <div className="container md:p-24 px-6 py-12 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="text-2xl font-medium mb-4">
              List of meals made from{" "}
              <span className="font-bold capitalize">{router.query.id}</span>
            </h1>
          </div>
          <div className="flex lg:w-3/5 w-full sm:flex-row flex-col mx-auto sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <input
                type="text"
                name="full-name"
                placeholder="Search Meals..."
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
        <Breadcrumb>
          <span className="text-gray-500 capitalize">{router.query.id}</span>
        </Breadcrumb>

        <div className="flex flex-wrap py-8 md:py-12">
          {data.map((item) => (
            <div
              className="lg:w-1/4 md:w-1/2 w-full p-4 grid justify-items-center"
              key={item.idMeal}
            >
              <Link
                href={`/meals/${item.idMeal}`}
                className="h-48 w-48 rounded-full overflow-hidden"
              >
                <Image
                  width={200}
                  height={200}
                  alt={item.strMeal}
                  className="object-cover object-center"
                  src={item.strMealThumb}
                  priority
                />
              </Link>
              <div className="mt-4">
                <h2 className="text-lg font-medium text-center">
                  {item.strMeal}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`
  );
  const data = await res.json();

  return {
    props: {
      data: data.meals,
    },
  };
}
