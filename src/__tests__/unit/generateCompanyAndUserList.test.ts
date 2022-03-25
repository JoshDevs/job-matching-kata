import generateCompanyAndUserList from '../../generateCompanyAndUserList';
import {mockCompanyAndUsersList} from '../fixture/mockCompanyAndUsersList';
import {mockParsedJobsByCompany} from '../fixture/mockJobsByCompany';
import {mockJobsLikedByUser} from '../fixture/mockJobsLikedByUser';

describe('[generateCompanyAndUserList]', () => {
  it('should generate a list of companies with users that like the its jobs',
      () => {
        expect(generateCompanyAndUserList(mockJobsLikedByUser,
            mockParsedJobsByCompany))
            .toEqual(mockCompanyAndUsersList);
      });
});
