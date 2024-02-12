import Error from "@/components/Error";
import InputSearch from "@/components/InputSearch";
import Layout from "@/components/Layout";
import ListLayout from "@/components/ListLayout";
import Loader from "@/components/Loader";
import MenuItem from "@/components/MenuItem";
import GetData from "@/utils/GetData";
import { useRouter } from "next/router";

export default function Search() {
  const { query } = useRouter();
  const { s } = query;

  const title = s ? `Result for ${s}` : "Search a meal";

  return (
    <Layout title={title}>
      <div className="flex justify-center md:justify-end pt-6 md:pt-12">
        <InputSearch />
      </div>
      <ListLayout title={title}>
        <RenderView searchText={s || ""} />
      </ListLayout>
    </Layout>
  );
}

function RenderView({ searchText }) {
  const endpoint = `search.php?s=${searchText}`;
  const { data, isLoading } = GetData(endpoint);

  if (isLoading) return <Loader />;

  return data.meals ? (
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
    <Error message={`${searchText} not found`} />
  );
}
