import {ReactionWithoutTimeDate} from '../model/Reaction';
import {Reaction} from '../schema/Reaction';


const mapReactionToReactionWithoutTimeDate =
(parsedCsvData: Reaction[]): ReactionWithoutTimeDate[] => {
  const mappedCsvData: ReactionWithoutTimeDate[] = [];

  parsedCsvData.forEach((reaction) => mappedCsvData.push({
    userId: reaction.userId,
    jobId: reaction.jobId,
    direction: Boolean(reaction.direction),
  }));

  return mappedCsvData;
};

export default mapReactionToReactionWithoutTimeDate;