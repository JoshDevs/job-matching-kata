import generateSimilarityScores from '../../generateSimilarityScores';
import {JobsLikedByUser} from '../../model/JobsLikedByUser';
import {mockSimilarityScoresByPairs}
  from '../fixture/mockSimilarityScoresByPairs';

const mockData: JobsLikedByUser[] = [
  {
    userId: '1',
    jobs: ['12', '43', '34', '3'],
  },
  {
    userId: '2',
    jobs: ['12', '43', '34', '3'],
  },
  {
    userId: '3',
    jobs: ['16', '43', '4', '90'],
  },
  {
    userId: '4',
    jobs: ['17', '4', '3', '38'],
  },
  {
    userId: '5',
    jobs: ['12', '47', '34', '31'],
  },
  {
    userId: '6',
    jobs: ['1', '47', '34', '31'],
  },
];

describe('[generateSimilarityScores]', () => {
  it('should return a list of similarity scores of user pairings', () => {
    expect(generateSimilarityScores(mockData))
        .toEqual(mockSimilarityScoresByPairs);
  });
});
