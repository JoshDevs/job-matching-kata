import {Reaction} from '../schema/Reaction';
import fs from 'fs';
import csv from 'csv-parser';
import {finished} from 'stream/promises';

const getParsedCsvData = async (fileName: string): Promise<Reaction[]> => {
  const result: Reaction[] = [];
  const parser = fs.createReadStream(`./data/${fileName}.csv`)
      .pipe(csv())
      .on('readable', () => {
        let reaction;
        while ((reaction = parser.read()) !== null) {
          result.push({
            userId: reaction.user_id,
            jobId: reaction.job_id,
            direction: reaction.direction,
            timeDate: reaction.time,
          });
        }
      });

  await finished(parser);
  return result;
};

export default getParsedCsvData;
