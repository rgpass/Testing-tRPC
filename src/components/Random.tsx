import { type FC } from "react";
import { api } from "~/utils/api";

export const Random: FC = () => {
  const hello = api.example.hello.useQuery({ num: 42 });

  if (!hello.data) return <p>Loading Random...</p>;

  return <p className="text-yellow-500">Random: ${hello.data.random}</p>;
};
