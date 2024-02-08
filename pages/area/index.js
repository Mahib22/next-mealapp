import CardItem from "@/components/CardItem";
import Error from "@/components/Error";
import Layout from "@/components/Layout";
import ListLayout from "@/components/ListLayout";
import Loader from "@/components/Loader";
import GetData from "@/utils/GetData";

export default function Area() {
  const title = "List of area available";

  return (
    <Layout title={title}>
      <ListLayout title={title}>
        <FetchData />
      </ListLayout>
    </Layout>
  );
}

function FetchData() {
  const { data, isLoading, error } = GetData("list.php?a=");

  if (error) return <Error />;
  if (isLoading) return <Loader />;

  return data.meals.map((item, index) => (
    <CardItem
      key={index}
      title={item.strArea}
      desc={`List of foods from ${item.strArea}`}
      pages="area"
    />
  ));
}
