import Joi from "joi"

export const userSchema = Joi.object({
    name: Joi.string().min(4).max(12).required(),
    email: Joi.string().email().trim().required(),
    role: Joi.string().trim(),
    profileImage: Joi.string(),
    password: Joi.string().trim().required()
})

export const updateUserSchema = Joi.object({
    name: Joi.string().min(4).max(12).optional(),
    email: Joi.string().email().optional(),
    role: Joi.string().trim().optional(),
    password: Joi.string().trim().optional()
})

export const authSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})