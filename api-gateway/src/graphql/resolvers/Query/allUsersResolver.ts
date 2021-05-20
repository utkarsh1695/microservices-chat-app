import UsersService from "#root/adapters/UsersService";

const allUsersResolver = async () => {
  const userList = await UsersService.fetchAllUsers();
  return userList;
};

export default allUsersResolver;