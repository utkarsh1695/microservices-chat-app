import config from "config";
import got from "got";

const USERS_SERVICE_URI = <string>config.get("USERS_SERVICE_URI");

export interface User {
  createdAt: string;
  id: string;
  username: string;
}

export interface UserSession {
  createdAt: string;
  expiresAt: string;
  id: string;
  userId: string;
}

export default class UsersService {
  static async createUser({ username, password }: { username: string, password: string }): Promise<User | null> {
    const body = await got.post(`${USERS_SERVICE_URI}/users`, { json: { username, password } }).json();
    return <User>body;
  }

  static async createUserSession({ username, password }: { username: string, password: string }): Promise<UserSession | null> {
    const body = await got.post(`${USERS_SERVICE_URI}/sessions`, { json: { username, password } }).json();
    return <UserSession>body;
  }

  static async deleteUserSession({ sessionId }: { sessionId: string }) {
    const body = await got.delete(`${USERS_SERVICE_URI}/sessions/${sessionId}`).json();
    return body;
  }

  static async fetchUser({ userId }: { userId: string }): Promise<User | null> {
    const body = await got.get(`${USERS_SERVICE_URI}/users/${userId}`).json();
    if (!body) return null;
    return <User>body;
  }
 
  static async fetchUserSession({ sessionId }: { sessionId: string }): Promise<UserSession | null> {
    const body = await got.get(`${USERS_SERVICE_URI}/sessions/${sessionId}`).json();
    if (!body) return null;
    return <UserSession>body;
  }
}