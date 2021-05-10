import UsersService from "#root/adapters/UsersService";
import { UserSessionType } from "../types";

const UserSession = {
  user: async (userSession: UserSessionType) => {
    const user = await UsersService.fetchUser({ userId: userSession.userId });
    return user;
  }
}

export default UserSession;