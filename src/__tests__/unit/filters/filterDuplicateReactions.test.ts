import filterDuplicateReactions
  from '../../../filters/filterDuplicateReactions';
import {mockParsedCsvDataWithoutTimeDate}
  from '../../fixture/mockCsvDataWithoutTimeDate';
import {mockMappedReactionsDuplicatesFilteredOut}
  from '../../fixture/mockDuplicatesFilteredOut';

describe('[filterDuplicateReactions]', () => {
  it('should return a list of reactions with duplicates filtered out', () => {
    expect(filterDuplicateReactions(mockParsedCsvDataWithoutTimeDate))
        .toEqual(mockMappedReactionsDuplicatesFilteredOut);
  });
});
