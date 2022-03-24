import getUsersWithHighestSimilarityScore
  from '../../getUsersWithHighestSimilarityScore';
import {SimilarityData} from '../../model/SimilarityData';
import {mockParsedCsvData} from '../fixture/mockCsvData';


const mockResult = {
  userOne: '2',
  userTwo: '3',
  similarityScore: 4,
};

describe('[getUsersWithHighestSimilarityScore]', () => {
  let result: SimilarityData;

  beforeEach(() => {
    result = getUsersWithHighestSimilarityScore(mockParsedCsvData);
  });

  it('should return users with highest similarity score', () => {
    expect(result).toEqual(mockResult);
  });
});
