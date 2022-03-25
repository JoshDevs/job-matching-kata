
import filterDuplicateReactions
  from '../../../filters/filterDuplicateReactions';
import filterReactionsByLiked from '../../../filters/filterReactionsByLiked';
import findHighestSimilarityScore from '../../../findHighestSimilarityScore';
import generateCompanyAndUserList from '../../../generateCompanyAndUserList';
import generateJobsByCompany from '../../../generateJobsByCompany';
import generateJobsLikedByUser from '../../../generateJobsLikedByUser';
import generateSimilarityScores from '../../../generateSimilarityScores';
import generateUniqueList from '../../../generateUniqueList';
import handleCsvData from '../../../handlers/handleCsvData';
import mapReactionToReactionWithoutTimeDate
  from '../../../mappers/mapReactionToReactionWithoutTimeDate';
import {mockParsedCsvData, mockParsedJobsData} from '../../fixture/mockCsvData';

jest.mock('../../../filters/filterReactionsByLiked');
const mockFilterReactionsByLiked = filterReactionsByLiked as jest.Mock;

jest.mock('../../../mappers/mapReactionToReactionWithoutTimeDate');
const mockMapReactionToReactionWithoutTimeDate =
mapReactionToReactionWithoutTimeDate as jest.Mock;

jest.mock('../../../filters/filterDuplicateReactions');
const mockFilterDuplicateReactions = filterDuplicateReactions as jest.Mock;

jest.mock('../../../generateJobsLikedByUser');
const mockGenerateJobsLikedByUser = generateJobsLikedByUser as jest.Mock;

jest.mock('../../../generateSimilarityScores');
const mockGenerateSimilarityScore = generateSimilarityScores as jest.Mock;

jest.mock('../../../findHighestSimilarityScore');
const mockFindHighestSimilarityScore = findHighestSimilarityScore as jest.Mock;

jest.mock('../../../generateUniqueList');
const mockGenerateUniqueList = generateUniqueList as jest.Mock;

jest.mock('../../../generateJobsByCompany');
const mockGenerateJobsByCompany = generateJobsByCompany as jest.Mock;

jest.mock('../../../generateCompanyAndUserList');
const mockGenerateCompanyAndUserList = generateCompanyAndUserList as jest.Mock;

describe('[handleCsvData]', () => {
  describe('for task1', () => {
    beforeEach(() => {
      handleCsvData(mockParsedCsvData);
    });

    it('should map the reactions to reactions without date/time', () => {
      expect(mockMapReactionToReactionWithoutTimeDate)
          .toHaveBeenCalledWith(mockParsedCsvData);
    });

    it('should get the jobs that have been liked', () => {
      expect(mockFilterReactionsByLiked)
          .toHaveBeenCalled();
    });

    it('should filter out the duplicate reactions', () => {
      expect(mockFilterDuplicateReactions).toHaveBeenCalled();
    });

    it('should generate a list of jobs liked by user', () => {
      expect(mockGenerateJobsLikedByUser).toHaveBeenCalled();
    });

    it('should get all the similarity scores for possible user pairings',
        () => {
          expect(mockGenerateSimilarityScore).toHaveBeenCalled();
        });

    it('should find the user pairing with highest similarity score', () => {
      expect(mockFindHighestSimilarityScore).toHaveBeenCalled();
    });
  });

  describe('for task2', () => {
    beforeEach(() => {
      handleCsvData(mockParsedCsvData, mockParsedJobsData);
    });

    it('should get unique list of companies', () => {
      expect(mockGenerateUniqueList).toHaveBeenCalled();
    });

    it('should get the list of jobs by company', () => {
      expect(mockGenerateJobsByCompany).toHaveBeenCalled();
    });

    it('should get the list of users by company', () => {
      expect(mockGenerateCompanyAndUserList).toHaveBeenCalled();
    });

    it('should get all the similarity scores for possible user pairings',
        () => {
          expect(mockGenerateSimilarityScore).toHaveBeenCalled();
        });

    it('should find the user pairing with highest similarity score', () => {
      expect(mockFindHighestSimilarityScore).toHaveBeenCalled();
    });
  });
});
