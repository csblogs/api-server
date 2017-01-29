import express from 'express';
import * as organisations from './organisation-controller';

const router = express.Router(); // eslint-disable-line new-cap

router.get('/', async (req, res) => {
  const allOrganisations = await organisations.getAll();
  res.send(allOrganisations);
});

// router.post('/', async (req, res) => {

// });

// router.get('/:id', async (req, res) => {

// });

// router.put('/:id', async(req, res) => {

// });

export default router;
