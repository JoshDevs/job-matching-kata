import generateJobsByCompany from '../../generateJobsByCompany';
import {mockParsedJobsData} from '../fixture/mockCsvData';
import {mockParsedJobsByCompany} from '../fixture/mockJobsByCompany';

const mockUniqueCompanies = ['1', '2', '3'];

describe('[filterJobsByCompany]', () => {
  it('should return a list of reactions filtered by direction "true"', () => {
    expect(generateJobsByCompany(mockParsedJobsData, mockUniqueCompanies))
        .toEqual(mockParsedJobsByCompany);
  });
});
