import getParsedCsvData from '../../csv/getCsvData';
import getUsersWithHighestSimilarityScore
  from '../../getUsersWithHighestSimilarityScore';

describe('[getUsersWithHighestSimilarityScore]', () => {
  it('should get the highest scoring similarity pair', async () => {
    const data = await getParsedCsvData('reactions');

    expect(getUsersWithHighestSimilarityScore(data))
        .toEqual({
          userOne: '5193',
          userTwo: '1791',
          similarityScore: 181,
        });
  });
});
