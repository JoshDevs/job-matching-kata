import {ReactionWithoutTimeDate} from './model/Reaction';

const generateUniqueUserList =
(uniqueReactions: ReactionWithoutTimeDate[]): string[] => {
  const uniqueUserList: string[] = [];

  uniqueReactions.forEach((reaction) => uniqueUserList.push(reaction.userId));

  return Array.from(new Set(uniqueUserList));
};

export default generateUniqueUserList;
