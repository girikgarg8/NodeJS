import express from 'express'

import { createTweet} from '../../controllers/tweet-controller'

const router=express.Router();

router.post('/tweets',createTweet);

export default router;

