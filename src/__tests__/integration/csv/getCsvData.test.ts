import getParsedCsvData from '../../../csv/getCsvData';
import {Reaction} from '../../../schema/Reaction';

describe('[getCsvData]', () => {
  it('should retrieve the data from the reactions.csv file', async () => {
    const csvData: Reaction[] = await getParsedCsvData('reactions');

    expect(csvData.length).toEqual(31099);
  });
});
