import generateUniqueList from './generateUniqueList';
import {JobsLikedByUser} from './model/Base';
import {ReactionWithoutTimeDate} from './model/Reaction';

const generateJobsLikedByUser =
 (uniqueReactions: ReactionWithoutTimeDate[]): JobsLikedByUser[] => {
   const uniqueUsers = generateUniqueList(uniqueReactions);
   const jobsLikedByUser: JobsLikedByUser[] = [];
   let jobIds: string[];
   uniqueUsers.forEach((user) => {
     jobIds = uniqueReactions
         .filter((uniqueReaction) =>
           uniqueReaction.userId === user)
         .map((reaction) => reaction.jobId);

     jobsLikedByUser.push({
       entityId: user,
       jobs: jobIds,
     });
   });

   return jobsLikedByUser;
 };

export default generateJobsLikedByUser;
