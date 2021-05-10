import UsersService from "#root/adapters/UsersService";

interface IArgs {
  username: string;
  password: string;
}

const createUserResolver = async (obj: any, { username, password }: IArgs) => {
  const user = await UsersService.createUser({ username, password });
  return user;
};

export default createUserResolver;