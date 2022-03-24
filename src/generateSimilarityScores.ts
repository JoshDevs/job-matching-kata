import {JobsLikedByUser} from './model/JobsLikedByUser';
import {SimilarityData} from './model/SimilarityData';

const generateSimilarityScores =
(jobsLikedByUsers: JobsLikedByUser[]): SimilarityData[] => {
  const similarityScores: SimilarityData[] = [];
  for (let i = 0; i < jobsLikedByUsers.length; i++) {
    for (let j = i + 1; j < jobsLikedByUsers.length; j++) {
      similarityScores.push({
        userOne: jobsLikedByUsers[i].userId,
        userTwo: jobsLikedByUsers[j].userId,
        // eslint-disable-next-line max-len
        similarityScore: jobsLikedByUsers[i].jobs.filter((jobIds) => jobsLikedByUsers[j].jobs.includes(jobIds)).length,
      });
    }
  }

  return similarityScores;
};

export default generateSimilarityScores;
