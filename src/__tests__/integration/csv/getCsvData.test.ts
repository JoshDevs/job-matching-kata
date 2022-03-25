
import {getParsedCsvData, getParsedCsvJobsData} from '../../../csv/getCsvData';
import {Jobs} from '../../../schema/Jobs';
import {Reaction} from '../../../schema/Reaction';

describe('[getCsvData]', () => {
  it('should retrieve the data from the reactions.csv file', async () => {
    const csvData: Reaction[] = await getParsedCsvData('reactions');

    expect(csvData.length).toEqual(31099);
  });

  it('should retrieve the data from the jobs.csv file', async () => {
    const csvJobsData: Jobs[] = await getParsedCsvJobsData('jobs');

    expect(csvJobsData.length).toEqual(12090);
  });
});
