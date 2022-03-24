import {Reaction} from '../schema/Reaction';


const filterReactionsByLiked = (parsedCsvData: Reaction[]): Reaction[] => {
  return parsedCsvData.filter((reaction) => reaction.direction === true);
};

export default filterReactionsByLiked;
