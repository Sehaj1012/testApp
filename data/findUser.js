"use server"

import { User } from "./schema";
export const findUser = async (user) => {
    const { UserName, password} = user;
    const foundUser = await User.findOne({ username: UserName});
    console.log(foundUser);
}