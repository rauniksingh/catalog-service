import express from 'express';

const router = express.Router();

router.post('/product', async (req, res, next) => {
  return res.status(201).json({message: "OK"})
});

export default router;
