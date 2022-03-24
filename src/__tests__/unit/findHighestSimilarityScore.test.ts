import findHighestSimilarityScore from '../../findHighestSimilarityScore';
import {mockSimilarityScoresByPairs}
  from '../fixture/mockSimilarityScoresByPairs';

describe('[findHighestSimilarityScore]', () => {
  it('should find the highest similarity score pairing', () => {
    expect(findHighestSimilarityScore(mockSimilarityScoresByPairs))
        .toEqual({
          userOne: '1',
          userTwo: '2',
          similarityScore: 4,
        });
  });
});
