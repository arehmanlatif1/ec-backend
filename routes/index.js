// import express from "express";
// import productsRoute from "./productsRoute.js"
// import cartRoute from "./cartRoute.js";
// import ordersRoute from "./ordersRoute.js";


// const router = express.Router();

// // Use the individual route files
// router.use("/products", productsRoute);
// router.use("/cart", cartRoute);
// router.use("/orders", ordersRoute);

// export default router;
import { Router } from "express";
import productsRoutes from "./productsRoute.js";
import usersRoutes from "./usersRoute.js";
import ordersRoutes from "./ordersRoute.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});

router.use("/products", productsRoutes);
router.use("/order", ordersRoutes);
router.use("/users", usersRoutes);

export default router;