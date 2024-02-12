import Error from "@/components/Error";
import Layout from "@/components/Layout";
import ListLayout from "@/components/ListLayout";
import Loader from "@/components/Loader";
import MenuItem from "@/components/MenuItem";
import GetData from "@/utils/GetData";

export default function Category() {
  const title = "List of categories available";

  return (
    <Layout title={title}>
      <ListLayout title={title}>
        <RenderView />
      </ListLayout>
    </Layout>
  );
}

function RenderView() {
  const { data, isLoading } = GetData("categories.php");

  if (isLoading) return <Loader />;

  return data ? (
    data.categories.map((item, index) => (
      <MenuItem
        key={index}
        id={item.strCategory.toLowerCase()}
        title={item.strCategory}
        img={item.strCategoryThumb}
        pages="categories"
      />
    ))
  ) : (
    <Error />
  );
}
