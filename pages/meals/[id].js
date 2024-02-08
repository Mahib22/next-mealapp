import Image from "next/image";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import Error from "@/components/Error";
import GetData from "@/utils/GetData";
import Link from "next/link";

export default function DetailMeals() {
  const router = useRouter();
  const endpoint = `lookup.php?i=${router.query.id}`;
  const { data, error, isLoading } = GetData(endpoint);

  if (error) return <Error />;
  if (isLoading) return <Loader />;

  const dataMeals = data.meals[0];
  const instructionsList = dataMeals.strInstructions.split("\r\n");

  return (
    <Layout title={dataMeals.strMeal}>
      <div className="pt-8">
        <h1 className="font-bold text-4xl">{dataMeals.strMeal}</h1>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src="/map-pin.svg" alt="map icon" width={15} height={15} />
            <Link
              href={`/area/${dataMeals.strArea.toLowerCase()}`}
              className="text-blue-600 underline text-sm"
            >
              {dataMeals.strArea}
            </Link>
          </div>

          <div className="flex items-center gap-2">
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
    </Layout>
  );
}
