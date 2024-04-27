import { Request, Response } from "express";
import * as EventService from "../services/events.service";

export const createEvent = async (req: Request, res: Response) => {
    try{
        console.log(req.body.title);
        //@ts-ignore
        const event = await EventService.newEvent(req.body, req.file, req.user._id)
        if(event){
            return res.status(200).json({
                message: 'event was created successfully!'
            })
        }
    } catch(err: any){
        return res.status(500).json({
            error: err.message
        })
    }
}

export const getAllEvents = async (req: Request, res: Response) => {
    try {
        const events = await EventService.getEvents();
        return res.status(200).json({
            status: "200",
            data: events,
        });
    } catch (error: any) {
        return res.status(500).json({
            message: "Failed to events",
            error: error.message,
        });
    }
};

export const getEventById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const event = await EventService.getSingleEvent(id);
        return res.status(200).json({
            status: "200",
            data: event,
        });
    } catch (error: any) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

export const deleteEvent = async (req: Request, res: Response) => {
    try{
        const event = await EventService.deleteEventById(req.params.id);
        return res.status(200).json({
            message: 'Event was deleted successfully!'
        })
    } catch(err: any){
        return res.status(500).json({
            error: err.message,
        });
    }
}
export const updateEventById = async (req: Request, res: Response) => {
    try{
        const event = await EventService.getSingleEvent(req.params.id);
        if(!event){
            return res.status(404).json({
                message: 'Event not found'
            })
        }
        //@ts-ignore
        const updateEvent = await EventService.updateEvent(req.params.id, event, req.file, req.user._id)
        return res.status(200).json({
            message: 'Event was deleted successfully!',
            updateEvent
        })
    } catch(err: any){
        return res.status(500).json({
            error: err.message,
        });
    }
}



