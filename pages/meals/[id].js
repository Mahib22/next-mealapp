import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export default function DetailMeals({ data }) {
  const instructionsList = data.strInstructions.split("\r\n");

  return (
    <Layout title={data.strMeal}>
      <div className="container px-5 py-10 mx-auto">
        <Breadcrumb>
          <Link
            href={`/ingredients/${data.strCategory.toLowerCase()}`}
            className="hover:underline"
          >
            {data.strCategory}
          </Link>
          <span>/</span>
          <span className="text-gray-500">{data.strMeal}</span>
        </Breadcrumb>

        <div className="pt-12">
          <h1 className="font-bold text-2xl">{data.strMeal}</h1>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Image src="/map-pin.svg" alt="map icon" width={15} height={15} />
              <span className="text-sm">{data.strArea}</span>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/share-box.svg"
                alt="share box icon"
                width={15}
                height={15}
              />
              <a
                href={data.strSource}
                target="__blank"
                className="text-blue-600 underline text-sm"
              >
                View Article
              </a>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4 my-8">
            <div className="md:w-1/2 w-full px-4 mb-5 md:mb-0">
              <Image
                width={200}
                height={200}
                alt={data.strMeal}
                className="object-cover w-full h-80"
                src={data.strMealThumb}
                priority
              />
            </div>
            <div className="md:w-1/2 w-full px-4 mb-5 md:mb-0">
              <iframe
                src={data.strYoutube.replace("watch?v=", "embed/")}
                allowFullScreen
                className="w-full h-80"
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pt-6">
              <h2 className="font-semibold text-lg">Ingredients</h2>
              <ul className="list-disc px-4">
                {Object.entries(data)
                  .filter(
                    ([key, value]) => key.startsWith("strIngredient") && value
                  )
                  .map(([key, value]) => (
                    <li key={key}>{value}</li>
                  ))}
              </ul>
            </div>

            <div className="md:w-1/2 pt-6">
              <h2 className="font-semibold text-lg">Measures</h2>
              <ul className="list-disc px-4">
                {Object.entries(data)
                  .filter(
                    ([key, value]) => key.startsWith("strMeasure1") && value
                  )
                  .map(([key, value]) => (
                    <li key={key}>{value}</li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="pt-6">
            <h2 className="font-semibold text-lg">Instructions</h2>
            <ul className="list-disc px-4">
              {instructionsList.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await res.json();

  return {
    props: {
      data: data.meals[0],
    },
  };
}
