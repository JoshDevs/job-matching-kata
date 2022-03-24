import {ReactionWithoutTimeDate} from '../model/Reaction';


const filterReactionsByLiked =
(parsedCsvData: ReactionWithoutTimeDate[]): ReactionWithoutTimeDate[] => {
  return parsedCsvData
      .filter((reaction) => Boolean(reaction.direction) === true);
};

export default filterReactionsByLiked;
