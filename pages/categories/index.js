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
        <FetchData />
      </ListLayout>
    </Layout>
  );
}

function FetchData() {
  const { data, isLoading, error } = GetData("categories.php");

  if (error) return <Error />;
  if (isLoading) return <Loader />;

  return data.categories.map((item, index) => (
    <MenuItem
      key={index}
      id={item.strCategory.toLowerCase()}
      title={item.strCategory}
      img={item.strCategoryThumb}
      pages="categories"
    />
  ));
}
