import express from 'express';
import patientsService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientsService.getNonSensitivePatients());
});

router.post('/', (_req, res) => {
  res.send('Saving a diary!');
});

export default router;
