import {CompanyWithUsers, JobsByCompany, JobsLikedByUser} from './model/Base';

const generateCompanyAndUserList =
(jobsLikedByUsers: JobsLikedByUser[],
    jobsByCompany: JobsByCompany[]): CompanyWithUsers[] => {
  const companyWithUsers: CompanyWithUsers[] = [];

  for (let i = 0; i < jobsByCompany.length; i++) {
    const users: string[] = [];
    for (let j = 0; j < jobsLikedByUsers.length; j++) {
      if (
        jobsByCompany[i].jobs
            .some((jobId) => jobsLikedByUsers[j].jobs.includes(jobId))
      ) {
        users.push(jobsLikedByUsers[j].entityId);
      }
    }
    companyWithUsers.push({
      companyId: jobsByCompany[i].entityId,
      users: users,
    });
  }

  return companyWithUsers;
};

export default generateCompanyAndUserList;
