import useSWR from "swr";
import Error from "./Error";
import Loader from "./Loader";
import MenuItem from "./MenuItem";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function CategoryList() {
  const { data, error, isLoading } = useSWR(
    `${process.env.base_url}/categories.php`,
    fetcher
  );

  if (error) return <Error />;
  if (isLoading) return <Loader />;

  return data.categories
    .slice(0, 4)
    .map((item, index) => (
      <MenuItem
        key={index}
        id={item.idCategory}
        title={item.strCategory}
        img={item.strCategoryThumb}
        pages="categories"
      />
    ));
}
