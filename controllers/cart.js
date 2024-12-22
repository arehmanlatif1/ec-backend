// import Cart from "../models/Cart.js";

// export const getCartItems = async (req, res) => {
//   try {
//     const cartItems = await Cart.find();
//     res.json(cartItems);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const getCartItem = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const cartItem = await Cart.findById(id);
//     if (cartItem) {
//       return res.json(cartItem);
//     } else {
//       return res.status(404).json({ error: "Cart item not found" });
//     }
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const addCartItem = async (req, res) => {
//   try {
//     const newCartItem = new Cart(req.body);
//     await newCartItem.save();
//     res.status(201).json(newCartItem);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const updateCartItem = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedCartItem = await Cart.findByIdAndUpdate(id, req.body, { new: true });
//     if (updatedCartItem) {
//       res.status(200).json(updatedCartItem);
//     } else {
//       res.status(404).json({ error: "Cart item not found" });
//     }
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const deleteCartItem = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedCartItem = await Cart.findByIdAndDelete(id);
//     if (deletedCartItem) {
//       res.status(200).json({ message: "Cart item deleted successfully" });
//     } else {
//       res.status(404).json({ error: "Cart item not found" });
//     }
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };
