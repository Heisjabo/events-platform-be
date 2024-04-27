import { sign, verify } from "jsonwebtoken";
import { UserType } from "../models/user";
import dotenv from 'dotenv';
dotenv.config()

export const generateToken = async (user: UserType) => {
    //@ts-ignore
  const accessToken = sign({userId: user._id },
    `${process.env.JWT_SECRET}`,
    { expiresIn: "1d" },
  );
  return accessToken;
};

export const decodeToken = async (token: string) => {
    const decoded = await verify(token, `${process.env.JWT_SECRET}`);
    return decoded;
}