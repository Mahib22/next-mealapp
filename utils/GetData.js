import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function GetData(endpoint) {
  const { data, isLoading } = useSWR(
    `${process.env.base_url}/${endpoint}`,
    fetcher
  );

  return {
    data,
    isLoading,
  };
}
