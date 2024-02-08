import CardItem from "@/components/CardItem";
import Error from "@/components/Error";
import Layout from "@/components/Layout";
import ListLayout from "@/components/ListLayout";
import Loader from "@/components/Loader";
import GetData from "@/utils/GetData";

export default function Ingredient() {
  const title = "List of ingredients available";

  return (
    <Layout title={title}>
      <ListLayout title={title}>
        <FetchData />
      </ListLayout>
    </Layout>
  );
}

function FetchData() {
  const { data, isLoading, error } = GetData("list.php?i=");

  if (error) return <Error />;
  if (isLoading) return <Loader />;

  return data.meals.map((item, index) => (
    <CardItem
      key={index}
      title={item.strIngredient}
      desc={item.strDescription}
      pages="ingredients"
    />
  ));
}
