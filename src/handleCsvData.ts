import filterDuplicateReactions from './filters/filterDuplicateReactions';
import filterReactionsByLiked from './filters/filterReactionsByLiked';

import mapReactionToReactionWithoutTimeDate
  from './mappers/mapReactionToReactionWithoutTimeDate';
import {Reaction} from './schema/Reaction';

const handleCsvData = (parsedCsvData: Reaction[]) => {
  const filteredReactionsByLiked = filterReactionsByLiked(parsedCsvData);

  const mappedReactionsWithoutTimeDate =
  mapReactionToReactionWithoutTimeDate(filteredReactionsByLiked);

  const uniqueReactionsWithoutTimeDate =
  filterDuplicateReactions(mappedReactionsWithoutTimeDate);
  console.log({uniqueReactionsWithoutTimeDate});
};

export default handleCsvData;
