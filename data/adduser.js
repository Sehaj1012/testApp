"use server"

import { User } from "./schema";
import bcrypt from 'bcryptjs'

export const addUser = async (user) => {
    const {UserName, password} = user;
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const newUser = new User({
        username: UserName,
        password: hashedPassword
    });
    await newUser.save();
}