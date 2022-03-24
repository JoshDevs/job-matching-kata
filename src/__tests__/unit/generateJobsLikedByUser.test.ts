import generateJobsLikedByUser from '../../generateJobsLikedByUser';
import generateUniqueUserList from '../../generateUniqueUserList';
import {JobsLikedByUser} from '../../model/JobsLikedByUser';
import {mockMappedReactionsDuplicatesFilteredOut}
  from '../fixture/mockDuplicatesFilteredOut';
import {mockJobsLikedByUser} from '../fixture/mockJobsLikedByUser';

jest.mock('../../generateUniqueUserList');
const mockGenerateUniqueUserList = generateUniqueUserList as jest.Mock;

describe('[generatedJobsLikedByUser]', () => {
  let result: JobsLikedByUser[];
  beforeEach(() => {
    mockGenerateUniqueUserList.mockReturnValue(['1', '2', '3']);
    result = generateJobsLikedByUser(
        mockMappedReactionsDuplicatesFilteredOut,
    );
  });
  it('should generate a list of the jobs liked by unique user', () => {
    expect(result)
        .toEqual(mockJobsLikedByUser);
  });

  it('should get a unique user list', () => {
    expect(mockGenerateUniqueUserList).toHaveBeenCalled();
  });
});
