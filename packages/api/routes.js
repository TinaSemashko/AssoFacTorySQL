import { Router } from "express";
import { knex as db } from "./db.js";
import {
  getAllUsers,
  getProfile,
  createNewUser,
} from "./src/controllers/user.js";
import * as userModel from "./src/models/user.js";
import {
  getPosts,
  getAllPosts,
  createNewPost,
} from "./src/controllers/posts.js";
import * as postModel from "./src/models/posts.js";
import { getAllComments } from "./src/controllers/comments.js";
import * as commentsModel from "./src/models/comments.js";
import { getSalons } from "./src/controllers/salons.js";
import * as salonsModel from "./src/models/salons.js";

const router = Router();

router.get("/", (req, res) => {});

router.get("/user", getProfile(userModel));
router.get("/users", getAllUsers(userModel));
router.post("/createuser", createNewUser(userModel));
router.get("/posts", getAllPosts(postModel));
router.post("/createpost", createNewPost(postModel));
// router.post("/uploadimages", uploadImages(postModel));
router.get("/salons", getSalons(salonsModel));

export default router;
