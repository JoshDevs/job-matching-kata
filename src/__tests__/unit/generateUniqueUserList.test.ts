import generateUniqueUserList from '../../generateUniqueUserList';
import {mockMappedReactionsDuplicatesFilteredOut}
  from '../fixture/mockDuplicatesFilteredOut';

describe('[generateUniqueUserList]', () => {
  it(
      'should generate a list of unique users from a list of  mapped reactions',
      () => {
        expect(generateUniqueUserList(
            mockMappedReactionsDuplicatesFilteredOut,
        ))
            .toEqual(['1', '2', '3', '4', '5']);
      });
});
