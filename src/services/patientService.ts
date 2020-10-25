import patientsData from '../../data/patients';

import { NonSensitivePatient, Patient } from '../types';

const patients: Array<Patient> = patientsData;

const getPatients = (): Array<Patient> => {
  return patients;
};

const getNonSensitivePatients = (): Array<NonSensitivePatient> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatients = () => {
  return null;
};

export default {
  getPatients,
  addPatients,
  getNonSensitivePatients,
};
