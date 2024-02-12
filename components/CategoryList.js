import Error from "./Error";
import Loader from "./Loader";
import MenuItem from "./MenuItem";
import GetData from "@/utils/GetData";

export default function CategoryList() {
  const { data, isLoading } = GetData("categories.php");

  if (isLoading) return <Loader />;

  return data.categories ? (
    data.categories
      .slice(0, 4)
      .map((item, index) => (
        <MenuItem
          key={index}
          id={item.strCategory.toLowerCase()}
          title={item.strCategory}
          img={item.strCategoryThumb}
          pages="categories"
        />
      ))
  ) : (
    <Error message={`${name} not found`} />
  );
}
