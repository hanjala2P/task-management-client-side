import { Router } from "express";
import { UserRoutes } from "modules/user/user.route.js";
import path from "path";

const router =Router();

const moduleRoutes =[
    {
        path:"/users",
        route:UserRoutes
    }
];
moduleRoutes.forEach((route)=> router.use(route.path,route.route));
export default router;