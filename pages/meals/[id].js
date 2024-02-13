import Image from "next/image";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import Error from "@/components/Error";
import Loader from "@/components/Loader";

export default function DetailMeals() {
  const { query, isReady } = useRouter();
  const { id } = query;

  const [dataMeals, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (isReady) {
      fetch(`${process.env.base_url}/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data.meals[0]);
          setLoading(false);
        })
        .catch((err) => setError(true));
    }
  }, [isReady, id]);

  return (
    <Layout title={dataMeals ? dataMeals.strMeal : ""}>
      <RenderView
        dataMeals={dataMeals}
        isError={isError}
        isLoading={isLoading}
      />
    </Layout>
  );
}

function RenderView({ dataMeals, isError, isLoading }) {
  if (isError) return <Error />;
  if (isLoading) return <Loader />;

  const instructionsList = dataMeals.strInstructions.split("\r\n");
  const tags = dataMeals.strTags ? dataMeals.strTags.split(",") : [];

  return (
    <div className="pt-4 md:pt-8">
      <h1 className="font-bold text-4xl">{dataMeals.strMeal}</h1>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Image
            src="/restaurant.svg"
            alt="restaurant icon"
            width={15}
            height={15}
          />
          <Link
            href={`/categories/${dataMeals.strCategory.toLowerCase()}`}
            className="text-blue-600 underline text-sm"
          >
            {dataMeals.strCategory}
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <Image src="/map-pin.svg" alt="map icon" width={15} height={15} />
          <Link
            href={`/area/${dataMeals.strArea.toLowerCase()}`}
            className="text-blue-600 underline text-sm"
          >
            {dataMeals.strArea}
          </Link>
        </div>

        {dataMeals.strSource && (
          <div className="flex items-center gap-1">
            <Image
              src="/share-box.svg"
              alt="share box icon"
              width={15}
              height={15}
            />
            <a
              href={dataMeals.strSource}
              target="__blank"
              className="text-blue-600 underline text-sm"
            >
              View Article
            </a>
          </div>
        )}
      </div>

      <div className="flex flex-wrap -mx-4 my-8">
        <div className="md:w-1/2 w-full px-4 mb-5 md:mb-0">
          <Image
            width={200}
            height={200}
            alt={dataMeals.strMeal}
            className="object-cover w-full h-80"
            src={dataMeals.strMealThumb}
            priority
          />
        </div>
        <div className="md:w-1/2 w-full px-4 mb-5 md:mb-0">
          <iframe
            src={dataMeals.strYoutube.replace("watch?v=", "embed/")}
            allowFullScreen
            className="w-full h-80"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 pt-6">
          <h2 className="font-semibold text-lg">Ingredients</h2>
          <ul className="list-disc px-4">
            {Object.entries(dataMeals)
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
            {Object.entries(dataMeals)
              .filter(([key, value]) => key.startsWith("strMeasure1") && value)
              .map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
          </ul>
        </div>
      </div>

      <div className="py-6">
        <h2 className="font-semibold text-lg">Instructions</h2>
        <ul className="list-disc px-4">
          {instructionsList.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-green-100 px-3 py-1 rounded-md">
            {tag.trim()}
          </span>
        ))}
      </div>
    </div>
  );
}
