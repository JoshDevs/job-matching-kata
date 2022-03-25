import generateSimilarityScores from '../../generateSimilarityScores';
import {CompanyWithUsers, JobsLikedByUser} from '../../model/Base';
import {mockSimilarityScoresByCompanyPairs, mockSimilarityScoresByPairs}
  from '../fixture/mockSimilarityScoresByPairs';

const mockJobsLikedByUserData: JobsLikedByUser[] = [
  {
    entityId: '1',
    jobs: ['12', '43', '34', '3'],
  },
  {
    entityId: '2',
    jobs: ['12', '43', '34', '3'],
  },
  {
    entityId: '3',
    jobs: ['16', '43', '4', '90'],
  },
  {
    entityId: '4',
    jobs: ['17', '4', '3', '38'],
  },
  {
    entityId: '5',
    jobs: ['12', '47', '34', '31'],
  },
  {
    entityId: '6',
    jobs: ['1', '47', '34', '31'],
  },
];

const mockCompanyWithUsers: CompanyWithUsers[] = [
  {
    companyId: '1',
    users: ['12', '17', '34', '5', '125'],
  },
  {
    companyId: '2',
    users: ['12', '1', '34', '57'],
  },
  {
    companyId: '3',
    users: ['125', '1', '34', '57'],
  },
  {
    companyId: '4',
    users: ['12', '17', '34', '5'],
  },
  {
    companyId: '5',
    users: ['12', '21', '3', '5', '125'],
  },
];

describe('[generateSimilarityScores]', () => {
  it('should return a list of similarity scores of user pairings', () => {
    expect(generateSimilarityScores(mockJobsLikedByUserData))
        .toEqual(mockSimilarityScoresByPairs);
  });

  it('should return a list of similarity scores of company pairings', () => {
    expect(generateSimilarityScores(
        mockJobsLikedByUserData,
        mockCompanyWithUsers,
    )).toEqual(mockSimilarityScoresByCompanyPairs);
  });
});
