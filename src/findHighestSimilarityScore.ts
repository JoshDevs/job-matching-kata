import {SimilarityData} from './model/SimilarityData';

const findHighestSimilarityScore =
(similarityScores: SimilarityData[]): SimilarityData => {
  const result = similarityScores.reduce((previous, current) =>
  previous.similarityScore > current.similarityScore ? previous : current);

  return result;
};

export default findHighestSimilarityScore;
