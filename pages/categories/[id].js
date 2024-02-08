import Error from "@/components/Error";
import Layout from "@/components/Layout";
import ListLayout from "@/components/ListLayout";
import Loader from "@/components/Loader";
import MenuItem from "@/components/MenuItem";
import GetData from "@/utils/GetData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CategoryDetail() {
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
        <FetchData name={name} />
      </ListLayout>
    </Layout>
  );
}

function FetchData({ name }) {
  const endpoint = `filter.php?c=${name}`;
  const { data, error, isLoading } = GetData(endpoint);

  if (error) return <Error />;
  if (isLoading) return <Loader />;

  return data.meals?.map((item, index) => (
    <MenuItem
      key={index}
      id={item.idMeal}
      title={item.strMeal}
      img={item.strMealThumb}
      pages="meals"
    />
  ));
}
