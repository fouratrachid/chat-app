import { Router } from "express";
import userRoutes from "./user-routes";
import chatRoutes from "./chat-routes";

const appRouter = Router(); 
export default appRouter;
appRouter.use("/user",userRoutes);
appRouter.use("/chat",chatRoutes);

