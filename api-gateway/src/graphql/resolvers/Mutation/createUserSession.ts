import UsersService from "#root/adapters/UsersService";
import { ResolverContext } from "../../types";

interface IArgs {
  username: string;
  password: string;
}

const createUserSessionResolver = async (obj: any, { username, password }: IArgs, context: ResolverContext) => {
  const userSession = await UsersService.createUserSession({ username, password });
  context.res.cookie('userSessionId', userSession?.id, { httpOnly: true });
  return userSession;
};

export default createUserSessionResolver;