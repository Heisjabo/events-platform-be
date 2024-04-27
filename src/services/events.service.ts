import Event from "../models/events";
import uploadFile from "../utils/cloud";
import { IEvent } from "../utils/types";

export const getEvents = async () => {
        const events = await Event.find();
        return events
}

export const newEvent = async (event: IEvent, file: Express.Multer.File, user: string) => {
    let result;
    if (file) result = await uploadFile(file);
    const { title, description, location, date, tickets_number, price, time } = event;
    return await Event.create({
        title: title, 
        description: description, 
        location: location, 
        date: date, 
        price: price, 
        tickets_number: tickets_number, 
        time: time,
        image: result?.url,
        userId: user
    })

};

export const getSingleEvent = async (id: string) => {
   const event = await Event.findById(id);
   if(!event){
    throw new Error('Event not found')
   }
   return event;
}

export const deleteEventById = async (id: string) => {
    const response = await Event.findByIdAndDelete(id);
    if(!response){
        throw new Error('Event not found')
       }
    return response;
}

export const updateEvent = async (id: string, event: IEvent, file: Express.Multer.File, user: string) => {
    let result;
    if (file) result = await uploadFile(file);
    const { title, description, location, date, tickets_number, price, time } = event;

    return await Event.findByIdAndUpdate(id, {
        title, description, location, date, tickets_number, price, time,
        image_url: result?.secure_url,
        userId: user
    });
};
