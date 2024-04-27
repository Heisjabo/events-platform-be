import { Document, Types } from "mongoose";
import Event from "../models/events";

export interface IEvent extends Document {
  title: string;
  date: Date;
  location: string;
  image: string;
  description: string;
  tickets_number: number;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
  time: string
}

export interface IBooking extends Document {
  user: string;
  event: Types.ObjectId | Event;
  numTickets: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  bookings: Types.ObjectId[];
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

