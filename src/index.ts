/* eslint-disable max-len */
import express from 'express';
import getParsedCsvData from './csv/getCsvData';
import getUsersWithHighestSimilarityScore from './getUsersWithHighestSimilarityScore';
// import getUsersWithHighestSimilarityScore from './getUsersWithHighestSimilarityScore';

const app = express();

app.get('/task-1', async (_req, res) => {
  res.send('========== Running Task 1 ==========');
  const data = await getParsedCsvData('reactions');
  const result = getUsersWithHighestSimilarityScore(data);
  res.send(`Results: User ${result.userOne} and User ${result.userTwo} have the highest similarity score of ${result.similarityScore}`);
});

app.listen(3000);
