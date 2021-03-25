import express from 'express'

//Import Controllers
import {getPosts, createPost} from '../controllers/post.js'

const router = express.Router()

router.get('/', getPosts)
router.post('/create-post', createPost)

export default router;