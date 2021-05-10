import { ResolverContext } from "../../types";

interface IArgs {
  me: Boolean;
}

const userSessionResolver = async (obj: any, args: IArgs, context: ResolverContext) => {
  if (args.me !== true) throw new Error("Invalid Argument Value!");
  return context.res.locals.userSession;
};

export default userSessionResolver;