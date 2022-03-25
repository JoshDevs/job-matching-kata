/* eslint-disable max-len */
import express from 'express';
import {getParsedCsvData, getParsedCsvJobsData} from './csv/getCsvData';
import getHighestSimilarityScore from './getHighestSimilarityScore';

const app = express();

app.get('/task-1', async (_req, res) => {
  const data = await getParsedCsvData('reactions');
  const result = getHighestSimilarityScore(data);
  res.send(`Results: User ${result.entityOne} and User ${result.entityTwo} have the highest similarity score of ${result.similarityScore}`);
});

app.get('/task-2', async (_req, res) => {
  const reactionData = await getParsedCsvData('reactions');
  const jobsData = await getParsedCsvJobsData('jobs');
  const result = getHighestSimilarityScore(reactionData, jobsData);
  res.send(`Results: Company ${result.entityOne} and Company ${result.entityTwo} have the highest similarity score of ${result.similarityScore}`);
});

app.listen(3000);
