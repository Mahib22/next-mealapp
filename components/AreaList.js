import useSWR from "swr";
import CardItem from "./CardItem";
import Error from "./Error";
import Loader from "./Loader";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function AreaList() {
  const { data, error, isLoading } = useSWR(
    `${process.env.base_url}/list.php?a=`,
    fetcher
  );

  if (error) return <Error />;
  if (isLoading) return <Loader />;

  return data.meals
    .slice(0, 4)
    .map((item, index) => (
      <CardItem
        key={index}
        title={item.strArea}
        desc={`List of foods from ${item.strArea}`}
        pages="area"
      />
    ));
}
