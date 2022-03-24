
import filterReactionsByLiked from '../../../filters/filterReactionsByLiked';
import {mockParsedCsvDataFilteredByLiked}
  from '../../fixture/mockCsvDataFilteredByLiked';
import {mockParsedCsvDataWithoutTimeDate}
  from '../../fixture/mockCsvDataWithoutTimeDate';

describe('[filterReactionsByLikes]', () => {
  it('should return a list of reactions filtered by direction "true"', () => {
    expect(filterReactionsByLiked(mockParsedCsvDataWithoutTimeDate))
        .toEqual(mockParsedCsvDataFilteredByLiked);
  });
});
