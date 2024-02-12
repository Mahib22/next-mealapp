import GetData from "@/utils/GetData";
import CardItem from "./CardItem";
import Error from "./Error";
import Loader from "./Loader";

export default function IngredientList() {
  const { data, isLoading } = GetData("list.php?i=");

  if (isLoading) return <Loader />;

  return data.meals ? (
    data.meals
      .slice(0, 4)
      .map((item, index) => (
        <CardItem
          key={index}
          title={item.strIngredient}
          desc={item.strDescription}
          pages="ingredients"
        />
      ))
  ) : (
    <Error />
  );
}
