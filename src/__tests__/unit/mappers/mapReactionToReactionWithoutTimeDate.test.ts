import mapReactionToReactionWithoutTimeDate
  from '../../../mappers/mapReactionToReactionWithoutTimeDate';
import {mockParsedCsvData} from '../../fixture/mockCsvData';
import {mockParsedCsvDataWithoutTimeDate}
  from '../../fixture/mockCsvDataWithoutTimeDate';


describe('[mapReactionToReactionWithoutTimeDate]', () => {
  it('should map parsed csv reaction data to reaction data without time/date',
      () => {
        expect(mapReactionToReactionWithoutTimeDate(mockParsedCsvData))
            .toEqual(mockParsedCsvDataWithoutTimeDate);
      });
});
