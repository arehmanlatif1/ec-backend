import { Router } from "express";
import { signUp, signIn, verify, getUsers, getUserById } from "../controllers/users.js";

const router = Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.get("/verify", verify);

router.get("/", getUsers);
router.get("/:id", getUserById);
// router.delete("/:id", controllers.deleteUserById);


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
