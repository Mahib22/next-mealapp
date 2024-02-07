import Error from "@/components/Error";
import Layout from "@/components/Layout";
import ListLayout from "@/components/ListLayout";
import Loader from "@/components/Loader";
import MenuItem from "@/components/MenuItem";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function IngredientDetail() {
  const { query, isReady } = useRouter();
  const { id } = query;
  const [name, setName] = useState("");

  useEffect(() => {
    if (isReady) setName(id);
  }, [isReady, id]);

  const formattedName = name.replace(/-/g, " ");
  const title = `List meals from ${formattedName}`;

  return (
    <Layout title={title}>
      <ListLayout title={title}>
        <FetchData name={formattedName} />
      </ListLayout>
    </Layout>
  );
}

function FetchData({ name }) {
  const { data, error, isLoading } = useSWR(
    `${process.env.base_url}/filter.php?i=${name}`,
    fetcher
  );

  if (error) return <Error />;
  if (isLoading) return <Loader />;

  return data.meals.map((item, index) => (
    <MenuItem
      key={index}
      id={item.idMeal}
      title={item.strMeal}
      img={item.strMealThumb}
      pages="meals"
    />
  ));
}
