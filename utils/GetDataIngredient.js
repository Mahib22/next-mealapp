import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function GetDataIngredient() {
  const { data, error, isLoading } = useSWR(
    `${process.env.base_url}/list.php?i=`,
    fetcher
  );

  return {
    dataIngredient: data,
    isLoading,
    isError: error,
  };
}
