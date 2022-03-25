import {ReactionWithoutTimeDate} from '../model/Reaction';

const filterReactionsByLiked =
(parsedCsvData: ReactionWithoutTimeDate[]): ReactionWithoutTimeDate[] => {
  return parsedCsvData
      .filter((reaction) => reaction.direction === true);
};

export default filterReactionsByLiked;
