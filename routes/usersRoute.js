import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.post("/register", controllers.registerUser);
router.post("/login", controllers.loginUser);
router.get("/", controllers.getUsers);
router.get("/id/:id", controllers.getUserById);
router.delete("/:id", controllers.deleteUserById);
router.patch("/:id/favorites", controllers.updateUserFavoritesById);
router.patch("/delete/:id/favorites", controllers.deleteUserFavoritesById);
router.get("/verify", controllers.verify);

export default router;



// import { Router } from "express";
// import * as controllers from "../controllers/users.js";

// const router = Router();

// router.post("/sign-up", controllers.signUp);
// router.post("/sign-in", controllers.signIn);
// router.get("/verify", controllers.verify);


// router.get("/", controllers.getUsers)
// router.get("/:id", controllers.getUser)

// export default router;
