import findHighestSimilarityScore from '../../findHighestSimilarityScore';
import {mockSimilarityScoresByPairs}
  from '../fixture/mockSimilarityScoresByPairs';

describe('[findHighestSimilarityScore]', () => {
  it('should find the highest similarity score pairing', () => {
    expect(findHighestSimilarityScore(mockSimilarityScoresByPairs))
        .toEqual({
          entityOne: '1',
          entityTwo: '2',
          similarityScore: 4,
        });
  });
});
