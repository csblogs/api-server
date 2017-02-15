import express from 'express';
import * as organisations from './organisation-controller';

const router = express.Router(); // eslint-disable-line new-cap

router.get('/', async (req, res) => {
  try {
    const allOrganisations = await organisations.getAll();
    return res.send(allOrganisations);
  } catch (ex) {
    return res.status(500).json({ error: ex.message });
  }
});

// router.post('/', async (req, res) => {

// });

// router.get('/:id', async (req, res) => {

// });

// router.put('/:id', async(req, res) => {

// });

export default router;
