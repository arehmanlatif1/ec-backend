import db from "../db/connection.js";
import productData from "../models/Product.js";
import productRawData from "../json/master.json" assert { type: "json" };

const insertData = async () => {
  await productData.create(productRawData);
  console.log("data sent");

  await db.close();
};

insertData();