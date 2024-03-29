import CardItem from "./CardItem";
import Error from "./Error";
import Loader from "./Loader";
import GetData from "@/utils/GetData";

export default function AreaList() {
  const { data, isLoading } = GetData("list.php?a=");

  if (isLoading) return <Loader />;

  return data?.meals ? (
    data.meals
      .slice(0, 4)
      .map((item, index) => (
        <CardItem
          key={index}
          title={item.strArea}
          desc={`List of foods from ${item.strArea}`}
          pages="area"
        />
      ))
  ) : (
    <Error />
  );
}
