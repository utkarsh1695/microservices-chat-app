import UsersService from "#root/adapters/UsersService";
import { ResolverContext } from "#root/graphql/types";

interface IArgs {
  me: boolean;
}

const deleteUserSession = async (obj: any, args: IArgs, context: ResolverContext) => {
  if (args.me !== true) throw new Error("Unsupported Argument Value!");

  const sessionId = context.res.locals.userSession.id;
  
  await UsersService.deleteUserSession({ sessionId });

  context.res.clearCookie("userSessionId");

  return true;
}

export default deleteUserSession;