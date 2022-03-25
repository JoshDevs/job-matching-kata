import {getParsedCsvData, getParsedCsvJobsData} from '../../csv/getCsvData';
import getHighestSimilarityScore from '../../getHighestSimilarityScore';

describe('[getUsersWithHighestSimilarityScore]', () => {
  it('should get the highest scoring similarity pair', async () => {
    const data = await getParsedCsvData('reactions');

    expect(getHighestSimilarityScore(data))
        .toEqual({
          entityOne: '5193',
          entityTwo: '1791',
          similarityScore: 181,
        });
  });

  it('should get the highest scoring similarity pair', async () => {
    const reactions = await getParsedCsvData('reactions');
    const jobs = await getParsedCsvJobsData('jobs');

    expect(getHighestSimilarityScore(reactions, jobs))
        .toEqual({
          entityOne: '46',
          entityTwo: '92',
          similarityScore: 104,
        });
  });
});
