import { User } from "models";
import { backendClient } from "services";

export class UsersRepository {
  private static instance: UsersRepository;
  private constructor() {}

  static getInstance(): UsersRepository {
    if (!UsersRepository.instance) {
      UsersRepository.instance = new UsersRepository();
    }

    return UsersRepository.instance;
  }

  getUser = async (userId: string): Promise<User> => {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // const url = `/${userId}`;
    // const response = await backendClient.get(url);

    // return response.data;
    const user = new User(
      userId,
      "Zolboo ",
      "Mongolia",
      "Kyoto",
      "Student",
      "2021/11/14 13:43",
      "2021/11/14 03:01"
    );
    return user;
  };
}
