import handleCsvData from './handleCsvData';
import {SimilarityData} from './model/SimilarityData';
import {Reaction} from './schema/Reaction';

const getUsersWithHighestSimilarityScore =
(parsedCsvData: Reaction[]): SimilarityData => {
  return handleCsvData(parsedCsvData);
};

export default getUsersWithHighestSimilarityScore;
