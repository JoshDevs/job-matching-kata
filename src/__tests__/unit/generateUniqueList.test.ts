import generateUniqueList from '../../generateUniqueList';
import {mockParsedJobsData} from '../fixture/mockCsvData';
import {mockMappedReactionsDuplicatesFilteredOut}
  from '../fixture/mockDuplicatesFilteredOut';

describe('[generateUniqueUserList]', () => {
  it(
      'should generate a list of unique users from a list of  mapped reactions',
      () => {
        expect(generateUniqueList(
            mockMappedReactionsDuplicatesFilteredOut,
        ))
            .toEqual(['1', '2', '3', '4', '5']);
      });

  it('should generate a list of unique company ids', () => {
    expect(generateUniqueList(
        mockMappedReactionsDuplicatesFilteredOut,
        mockParsedJobsData))
        .toEqual(['1', '2', '3']);
  });
});
