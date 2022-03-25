import {handleCsvData} from './handlers/handleCsvData';
import {SimilarityData} from './model/SimilarityData';
import {Jobs} from './schema/Jobs';
import {Reaction} from './schema/Reaction';

const getHighestSimilarityScore =
(parsedCsvData: Reaction[], parsedJobsData?: Jobs[]): SimilarityData => {
  return !parsedJobsData ?
  handleCsvData(parsedCsvData) :
  handleCsvData(parsedCsvData, parsedJobsData);
};

export default getHighestSimilarityScore;
