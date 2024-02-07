import CardItem from "@/components/CardItem";
import Error from "@/components/Error";
import Layout from "@/components/Layout";
import ListLayout from "@/components/ListLayout";
import Loader from "@/components/Loader";
import GetDataIngredient from "@/utils/GetDataIngredient";

export default function Ingredient() {
  const title = "List of Ingredient";

  return (
    <Layout title={title}>
      <ListLayout title={title}>
        <FetchData />
      </ListLayout>
    </Layout>
  );
}

function FetchData() {
  const { dataIngredient, isLoading, isError } = GetDataIngredient();

  if (isError) return <Error />;
  if (isLoading) return <Loader />;

  return dataIngredient.meals.map((item, index) => (
    <CardItem
      key={index}
      title={item.strIngredient}
      desc={item.strDescription}
      pages="ingredients"
    />
  ));
}
