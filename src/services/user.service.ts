import User from "../models/user";
import { UserType } from "../models/user";
import uploadFile from "../utils/cloud";
import bcrypt from 'bcryptjs'

export const createUser = async (user: UserType) => {
    const newUser = await User.create(user);
    return newUser;
}

export const getUsers = async () => {
    const users = await User.find();
    return users;
}

export const getSingleUser = async (id: string) => {
    const user = await User.findById(id);
    if(!user){
        throw new Error("User not found")
    }
    return user;
}

export const checkUser = async (email: string) => {
    const user = await User.findOne({ email: email});
    return user;
}

export const removeUser = async (id: string) => {
    const user = await User.findByIdAndDelete(id);
    if(!user){
        throw new Error("User Not Found");
    }
    return
}

export const updateUserById = async (id: string, user: Partial<UserType>, file: Express.Multer.File) => {
    let result;
    if (file) result = await uploadFile(file);
    let hashedPass;
    if(user.password){
        const salt = await bcrypt.genSalt(10);
        hashedPass = await bcrypt.hash(user.password, salt);
    }
    return await User.findByIdAndUpdate(id, {
      name: user.name,
      role: user.role,
      password: hashedPass,
      profileImage: result?.secure_url,
    });
  };