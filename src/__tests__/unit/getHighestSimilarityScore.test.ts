import getHighestSimilarityScore
  from '../../getHighestSimilarityScore';
import {mockParsedCsvData, mockParsedJobsData} from '../fixture/mockCsvData';


const mockResult = {
  entityOne: '4',
  entityTwo: '5',
  similarityScore: 4,
};

const mockJobResult = {
  entityOne: '1',
  entityTwo: '2',
  similarityScore: 5,
};

describe('[getHighestSimilarityScore]', () => {
  it('should return users with highest similarity score for', () => {
    expect(getHighestSimilarityScore(mockParsedCsvData)).toEqual(mockResult);
  });

  it('should return companies with highest similarity score', () => {
    expect(getHighestSimilarityScore(mockParsedCsvData, mockParsedJobsData))
        .toEqual(mockJobResult);
  });
});
