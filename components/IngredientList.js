import GetDataIngredient from "@/utils/GetDataIngredient";
import CardItem from "./CardItem";
import Error from "./Error";
import Loader from "./Loader";

export default function IngredientList() {
  const { dataIngredient, isLoading, isError } = GetDataIngredient();

  if (isError) return <Error />;
  if (isLoading) return <Loader />;

  return dataIngredient.meals
    .slice(0, 4)
    .map((item, index) => (
      <CardItem
        key={index}
        title={item.strIngredient}
        desc={item.strDescription}
        pages="ingredients"
      />
    ));
}
