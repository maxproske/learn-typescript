import diaryData from '../../data/diaries';

import { NonSensitiveDiaryEntry, DiaryEntry } from '../types';

const diaries: Array<DiaryEntry> = diaryData;

const getEntries = (): Array<DiaryEntry> => {
  return diaries;
};

const addEntry = () => {
  return null;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

export default {
  getEntries,
  addEntry,
  getNonSensitiveEntries,
};
