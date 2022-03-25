interface EntityBase {
    entityId: string;
    jobs: string[];
}

export interface JobsLikedByUser extends EntityBase {}

export interface JobsByCompany extends EntityBase {}

export interface CompanyWithUsers {
    companyId: string;
    users: string[];
}
