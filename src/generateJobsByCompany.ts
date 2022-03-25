import {JobsByCompany} from './model/Base';
import {Jobs} from './schema/Jobs';

const generateJobsByCompany =
(parsedJobsData: Jobs[], uniqueCompanies: string[]): JobsByCompany[] => {
  const jobsByCompany: JobsByCompany[] = [];
  let jobIds: string[];

  uniqueCompanies.forEach((company) => {
    jobIds = parsedJobsData
        .filter((jobs) => jobs.companyId === company)
        .map((job) => job.jobId);

    jobsByCompany.push({
      entityId: company,
      jobs: jobIds,
    });
  });

  return jobsByCompany;
};

export default generateJobsByCompany;
