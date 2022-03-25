import filterDuplicateReactions from '../filters/filterDuplicateReactions';
import filterReactionsByLiked from '../filters/filterReactionsByLiked';
import findHighestSimilarityScore from '../findHighestSimilarityScore';
import generateCompanyAndUserList from '../generateCompanyAndUserList';
import generateJobsByCompany from '../generateJobsByCompany';
import generateJobsLikedByUser from '../generateJobsLikedByUser';
import generateSimilarityScores from '../generateSimilarityScores';
import generateUniqueList from '../generateUniqueList';

import mapReactionToReactionWithoutTimeDate
  from '../mappers/mapReactionToReactionWithoutTimeDate';
import {SimilarityData} from '../model/SimilarityData';
import {Jobs} from '../schema/Jobs';
import {Reaction} from '../schema/Reaction';

export const handleCsvData =
(parsedCsvData: Reaction[], parsedJobsData?: Jobs[]): SimilarityData => {
  const mappedReactionsWithoutTimeDate =
    mapReactionToReactionWithoutTimeDate(parsedCsvData);

  const filteredReactionsByLiked =
  filterReactionsByLiked(mappedReactionsWithoutTimeDate);

  const uniqueReactionsWithoutTimeDate =
  filterDuplicateReactions(filteredReactionsByLiked);

  const jobsLikedByUsers =
  generateJobsLikedByUser(uniqueReactionsWithoutTimeDate);

  if (!parsedJobsData) {
    const allUserSimilarityScores = generateSimilarityScores(jobsLikedByUsers);

    return findHighestSimilarityScore(allUserSimilarityScores);
  }

  const uniqueCompanies =
  generateUniqueList(uniqueReactionsWithoutTimeDate, parsedJobsData);

  const jobsByCompany = generateJobsByCompany(parsedJobsData, uniqueCompanies);

  const companyAndUserList =
  generateCompanyAndUserList(jobsLikedByUsers, jobsByCompany);

  const allCompaniesSimilarityScores =
  generateSimilarityScores(jobsLikedByUsers, companyAndUserList);

  return findHighestSimilarityScore(allCompaniesSimilarityScores);
};

export default handleCsvData;
