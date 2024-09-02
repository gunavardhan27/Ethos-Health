import express from "express"
import { uploadStory } from "../controllers/story.controller.js"
const router = express.Router()
router.post('/uploadStory',uploadStory)
export default router