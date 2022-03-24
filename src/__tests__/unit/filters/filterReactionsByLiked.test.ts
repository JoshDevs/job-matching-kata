
import filterReactionsByLiked from '../../../filters/filterReactionsByLiked';
import {mockParsedCsvData} from '../../fixture/mockCsvData';
import {mockParsedCsvDataFilteredByLiked}
  from '../../fixture/mockCsvDataFilteredByLiked';

describe('[filterReactionsByLikes]', () => {
  it('should return a list of reactions filtered by direction "true"', () => {
    expect(filterReactionsByLiked(mockParsedCsvData))
        .toEqual(mockParsedCsvDataFilteredByLiked);
  });
});
