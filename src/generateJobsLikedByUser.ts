import generateUniqueUserList from './generateUniqueUserList';
import {JobsLikedByUser} from './model/JobsLikedByUser';
import {ReactionWithoutTimeDate} from './model/Reaction';

const generateJobsLikedByUser =
 (uniqueReactions: ReactionWithoutTimeDate[]): JobsLikedByUser[] => {
   const uniqueUsers = generateUniqueUserList(uniqueReactions);
   const jobsLikedByUser: JobsLikedByUser[] = [];
   let jobIds: string[];
   uniqueUsers.forEach((user) => {
     jobIds = uniqueReactions
         .filter((uniqueReaction) =>
           uniqueReaction.userId === user)
         .map((reaction) => reaction.jobId);

     jobsLikedByUser.push({
       userId: user,
       jobs: jobIds,
     });
   });

   return jobsLikedByUser;
 };

export default generateJobsLikedByUser;
