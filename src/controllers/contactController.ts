import { Response, Request, NextFunction } from "express";
import Contact from "../models/contactModel";
import catchAsync from "../utils/catchAsync";
import findAndSendMissingValues from "../utils/findAndSendMissingValues";
import AppError from "../utils/AppError";

export const createContact = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const data = findAndSendMissingValues(
            ["name", "email", "query"],
            req.body
        );
        const contact = await Contact.create(data);
        if (!contact) {
            return next(new AppError("Something went wrong", 400));
        }

        return res.status(201).json({
            message: "Registration successful",
        });
    }
);
