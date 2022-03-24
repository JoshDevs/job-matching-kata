import filterDuplicateReactions from '../../filters/filterDuplicateReactions';
import filterReactionsByLiked from '../../filters/filterReactionsByLiked';
import handleCsvData from '../../handleCsvData';
import mapReactionToReactionWithoutTimeDate
  from '../../mappers/mapReactionToReactionWithoutTimeDate';
import {mockParsedCsvData} from '../fixture/mockCsvData';

jest.mock('../../filters/filterReactionsByLiked');
const mockFilterReactionsByLiked = filterReactionsByLiked as jest.Mock;

jest.mock('../../mappers/mapReactionToReactionWithoutTimeDate');
const mockMapReactionToReactionWithoutTimeDate =
mapReactionToReactionWithoutTimeDate as jest.Mock;

jest.mock('../../filters/filterDuplicateReactions');
const mockFilterDuplicateReactions = filterDuplicateReactions as jest.Mock;

describe('[handleCsvData]', () => {
  beforeEach(() => {
    handleCsvData(mockParsedCsvData);
  });

  it('should get the jobs that have been liked', () => {
    expect(mockFilterReactionsByLiked)
        .toHaveBeenCalledWith(mockParsedCsvData);
  });

  it('should map the reactions to reactions without date/time', () => {
    expect(mockMapReactionToReactionWithoutTimeDate).toHaveBeenCalled();
  });

  it('should filter out the duplicate reactions', () => {
    expect(mockFilterDuplicateReactions).toHaveBeenCalled();
  });
});
