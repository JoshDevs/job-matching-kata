import filterDuplicateReactions from './filters/filterDuplicateReactions';
import filterReactionsByLiked from './filters/filterReactionsByLiked';
import findHighestSimilarityScore from './findHighestSimilarityScore';
import generateJobsLikedByUser from './generateJobsLikedByUser';
import generateSimilarityScores from './generateSimilarityScores';

import mapReactionToReactionWithoutTimeDate
  from './mappers/mapReactionToReactionWithoutTimeDate';
import {SimilarityData} from './model/SimilarityData';
import {Reaction} from './schema/Reaction';

const handleCsvData = (parsedCsvData: Reaction[]): SimilarityData => {
  const mappedReactionsWithoutTimeDate =
    mapReactionToReactionWithoutTimeDate(parsedCsvData);

  const filteredReactionsByLiked =
  filterReactionsByLiked(mappedReactionsWithoutTimeDate);

  const uniqueReactionsWithoutTimeDate =
  filterDuplicateReactions(filteredReactionsByLiked);

  const jobsLikedByUsers =
  generateJobsLikedByUser(uniqueReactionsWithoutTimeDate);

  const allUserSimilarityScores = generateSimilarityScores(jobsLikedByUsers);

  return findHighestSimilarityScore(allUserSimilarityScores);
};

export default handleCsvData;
