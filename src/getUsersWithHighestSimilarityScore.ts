import handleCsvData from './handleCsvData';
import {HighestScoringUsers} from './model/HighestScoringUsers';
import {Reaction} from './schema/Reaction';

const getUsersWithHighestSimilarityScore =
(parsedCsvData: Reaction[]): HighestScoringUsers => {
  handleCsvData(parsedCsvData);
  return {} as HighestScoringUsers;
};

export default getUsersWithHighestSimilarityScore;
