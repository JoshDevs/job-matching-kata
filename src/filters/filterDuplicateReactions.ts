import {ReactionWithoutTimeDate} from '../model/Reaction';

const filterDuplicateReactions =
(mappedCsvData: ReactionWithoutTimeDate[]): ReactionWithoutTimeDate[] => {
  const unique: ReactionWithoutTimeDate[] = [];

  mappedCsvData.map((reactions) =>
    unique.filter((uniqueReaction) =>
      uniqueReaction.userId === reactions.userId &&
     uniqueReaction.jobId === reactions.jobId,
    ).length > 0 ? null : unique.push(reactions));

  return unique;
};

export default filterDuplicateReactions;
