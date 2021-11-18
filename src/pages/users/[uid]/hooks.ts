import useSWR from "swr";

import { UsersRepository } from "services";

export const useGetUser = (userId: string) => {
  const repository = UsersRepository.getInstance();
  const url = `/${userId}`;
  const { data, error, mutate } = useSWR(url, () => repository.getUser(userId));

  return {
    user: data,
    error,
    mutate,
  };
};
