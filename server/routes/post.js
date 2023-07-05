import express from 'express';
import { getPostBySearch, getPost, createPost, upDatePost, deletePost, likePost, getPosts } from '../controllers/posts.js';
import auth from '../middleware/auth.js';


const router = express.Router();

router.get('/', getPosts);
router.post("/", auth, createPost);

router.patch("/:id", auth, upDatePost);
router.get("/:id", getPost)
router.delete("/:id", auth, deletePost);
router.patch("/:id/likepost", auth, likePost);
router.get("/search", getPostBySearch)

export default router