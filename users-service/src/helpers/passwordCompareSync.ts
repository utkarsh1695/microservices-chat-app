import bcryptjs from "bcryptjs";

const passwordCompareSync = (passwordToTest: string, passwordHash: string) => bcryptjs.compareSync(passwordToTest, passwordHash);

export default passwordCompareSync;