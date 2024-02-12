import Error from "@/components/Error";
import Layout from "@/components/Layout";
import ListLayout from "@/components/ListLayout";
import Loader from "@/components/Loader";
import MenuItem from "@/components/MenuItem";
import GetData from "@/utils/GetData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AreaDetail() {
  const { query, isReady } = useRouter();
  const { id } = query;
  const [name, setName] = useState("");

  useEffect(() => {
    if (isReady) setName(id);
  }, [isReady, id]);

  const title = `List meals from ${name}`;

  return (
    <Layout title={title}>
      <ListLayout title={title}>
        <RenderView name={name} />
      </ListLayout>
    </Layout>
  );
}

function RenderView({ name }) {
  const endpoint = `filter.php?a=${name}`;
  const { data, isLoading } = GetData(endpoint);

  if (isLoading) return <Loader />;

  return data?.meals ? (
    data.meals.map((item, index) => (
      <MenuItem
        key={index}
        id={item.idMeal}
        title={item.strMeal}
        img={item.strMealThumb}
        pages="meals"
      />
    ))
  ) : (
    <Error message={`${name} not found`} />
  );
}
