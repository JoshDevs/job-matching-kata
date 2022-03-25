
import {CompanyWithUsers, JobsLikedByUser} from './model/Base';
import {SimilarityData} from './model/SimilarityData';

const generateSimilarityScores =
(jobsLikedByUsers: JobsLikedByUser[],
    companyWithUsers?: CompanyWithUsers[]): SimilarityData[] => {
  const similarityScores: SimilarityData[] = [];

  if (!companyWithUsers) {
    for (let i = 0; i < jobsLikedByUsers.length; i++) {
      for (let j = i + 1; j < jobsLikedByUsers.length; j++) {
        similarityScores.push({
          entityOne: jobsLikedByUsers[i].entityId,
          entityTwo: jobsLikedByUsers[j].entityId,
          similarityScore: jobsLikedByUsers[i].jobs
              .filter((jobId) => jobsLikedByUsers[j].jobs
                  .includes(jobId)).length,
        });
      }
    }
    return similarityScores;
  }

  for (let i = 0; i < companyWithUsers.length; i++) {
    for (let j = i + 1; j < companyWithUsers.length; j++) {
      similarityScores.push({
        entityOne: companyWithUsers[i].companyId,
        entityTwo: companyWithUsers[j].companyId,
        similarityScore: companyWithUsers[i].users
            .filter((userId) => companyWithUsers[j].users
                .includes(userId)).length,
      });
    }
  }

  return similarityScores;
};

export default generateSimilarityScores;
