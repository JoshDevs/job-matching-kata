// eslint-disable-next-line max-len
import getUsersWithHighestSimilarityScore from '../../getUsersWithHighestSimilarityScore';
import handleCsvData from '../../handleCsvData';
import {HighestScoringUsers} from '../../model/HighestScoringUsers';
import {mockParsedCsvData} from '../fixture/mockCsvData';

jest.mock('../../handleCsvData');
const mockHandleCsvData = handleCsvData as jest.Mock;

const mockResult = {
  userOneId: '1',
  userTwoId: '2',
  similarity: 3,
};

describe('[getUsersWithHighestSimilarityScore]', () => {
  let result: HighestScoringUsers;

  beforeEach(() => {
    result = getUsersWithHighestSimilarityScore(mockParsedCsvData);
  });

  it('should return users with highest similarity score', () => {
    expect(result).toEqual(mockResult);
  });

  it('should get parsed csv data', () => {
    expect(mockHandleCsvData).toHaveBeenCalledWith(mockParsedCsvData);
  });
});
