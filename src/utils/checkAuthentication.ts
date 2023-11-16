import { Request, Response, NextFunction } from "express";

export const checkAuthenticationAsAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.isAuthenticated()) {
        res.locals.user = req.user;
        // res.locals.user = req.user;
        return next();
    } else {
        return res.redirect("/login");
    }
};
