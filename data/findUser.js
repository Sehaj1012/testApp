"use server"
import bcrypt from 'bcryptjs'
import { User } from "./schema";
export const findUser = async (user) => {
    const { UserName, password} = user;
    const foundUser = await User.findOne({ username: UserName});
    if (!foundUser) {
        return false;
    }
    console.log(foundUser);
    const isMatch = await bcrypt.compare(password, foundUser.password);
    console.log(isMatch);
    if (!isMatch) {
        return false;
    }

    console.log(foundUser.username);
    return foundUser.username;
}