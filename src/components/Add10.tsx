import { type FC } from "react";
import { api } from "~/utils/api";

export const Add10: FC = () => {
  const hello = api.example.hello.useQuery({ num: 42 });

  if (!hello.data) return null;

  return <p className="text-blue-500">Add 10: ${hello.data.add10}</p>;
};
