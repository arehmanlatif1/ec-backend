import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

let SALT_ROUNDS = 11;
let TOKEN_KEY = "reallylonggoodkey";

if (process.env.NODE_ENV === "production") {
  SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
  TOKEN_KEY = process.env.TOKEN_KEY;
}

const today = new Date();
const exp = new Date(today);
exp.setDate(today.getDate() + 30);

export const signUp = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);

    const user = new User({
      userName,
      email,
      password_digest,
      favGames: []
    });
    console.log(user)

    await user.save();
    
    const payload = {
      id: user._id,
      userName: user.userName,
      email: user.email,
      exp: parseInt(exp.getTime() / 1000),
    };

    const token = jwt.sign(payload, TOKEN_KEY);

    res.status(201).json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email }).select(
      "userName email password_digest favGames"
    );

    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        userName: user.userName,
        email: user.email,
        favGames: user.favGames,
        exp: parseInt(exp.getTime() / 1000),
      };

      const token = jwt.sign(payload, TOKEN_KEY);

      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload);
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).send("Not authorized");
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      return res.json(user);
    }
    res.status(404).json({ message: "User not found!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const addFavGame = async (req, res) => {
  try {
    const { gameId } = req.params

    const token = req.headers.authorization.split(" ")[1];

    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      await User.findByIdAndUpdate(payload.id, { $push: { favGames: gameId}})
      res.json({ message: `Game with id of ${gameId} has been added to User's favorites`})
    } else {
      res.json({ message: "Unauthorized"})
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}

export const deleteFavGame = async (req, res) => {
  try {
    const { gameId } = req.params

    const token = req.headers.authorization.split(" ")[1];

    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      const user = await User.findById(payload.id);

      if (user){
        user.favGames = user.favGames.filter(id => id.toString() !== gameId)
        await user.save()
        res.json({ message: `Game with id of ${gameId} has been deleted from User's favorites`})
      } else {
        res.status(404).json({message: "User not found!"})
      }

    } else {
      res.json({ message: "Unauthorized"})
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}

export const getFavGames = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      const favGames = await User.findById(payload.id).select("favGames").populate("favGames")
      res.json(favGames)
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}
