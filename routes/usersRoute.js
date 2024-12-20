import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify", controllers.verify);

router.put("/favGame/:gameId", controllers.addFavGame)
router.get("/favGames", controllers.getFavGames)
router.put("/deleteFavGame/:gameId", controllers.deleteFavGame)

router.get("/", controllers.getUsers)
router.get("/:id", controllers.getUser)

export default router;
