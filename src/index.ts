/* eslint-disable max-len */
import express from 'express';
// import getUsersWithHighestSimilarityScore from './getUsersWithHighestSimilarityScore';

const app = express();

app.get('/task-1', (_req, res) => {
  res.send('========== Running Task 1 ==========');
//   const result = getUsersWithHighestSimilarityScore();
//   res.send(`Results: User ${result.userOneId} and User ${result.userTwoId} have the highest similarity score of ${result.similarityScore}`);
});

app.listen(3000);
