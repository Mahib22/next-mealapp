import CardItem from "@/components/CardItem";
import Layout from "@/components/Layout";
import ListLayout from "@/components/ListLayout";
import Loader from "@/components/Loader";
import GetData from "@/utils/GetData";

export default function Area() {
  const title = "List of area available";

  return (
    <Layout title={title}>
      <ListLayout title={title}>
        <RenderView />
      </ListLayout>
    </Layout>
  );
}

function RenderView() {
  const { data, isLoading } = GetData("list.php?a=");

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
