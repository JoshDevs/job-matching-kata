import {ReactionWithoutTimeDate} from './model/Reaction';
import {Jobs} from './schema/Jobs';

const generateUniqueList =
(uniqueReactions: ReactionWithoutTimeDate[], jobsData?: Jobs[]): string[] => {
  const uniqueList: string[] = [];

  !jobsData ?
  uniqueReactions.forEach((reaction) => uniqueList.push(reaction.userId)) :
  jobsData.forEach((job) => uniqueList.push(job.companyId));

  return Array.from(new Set(uniqueList));
};

export default generateUniqueList;
