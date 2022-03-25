# Otta - Engineering Interview Task

This is the take-home interview task for engineering job applications at Otta.

The goal is to both give you a flavour of the kind of work we do, and give us an idea of your technical (and non-technical) skills. The key thing we're assessing is your level of pragmatism, but we're also interested in code style and how you structure the problem (so please don't just do it in SQL!)

We expect the task to take one hour. If you require clarification on anything, please don't hesitate to contact us.

## Instructions

Start by cloning this repository using your personal GitHub account. Create a new private repository and push your clone to this new repo (you will need to remove the original remote with `git remote remove origin`). Please ensure all of your work is committed to this - we'll only consider the `main` branch.

The following details the individual tasks. Please complete **all** of the them. You may **use any programming language**, provided all of the code used can be committed to this repo. You don't need to provide instructions for running the code, or any explanation other than the answers.

### Task 1

In the `data` folder of this repo there is a CSV file called `reactions.csv`. It contains real data corresponding to how users on Otta have reacted to (saved or skipped) jobs on the platform.

The reaction data consists of four columns:

- `user_id` - the integer ID of the user who liked or disliked the job
- `job_id` - the integer ID of the job the user interacted with
- `direction` - whether the user liked (`true`) or disliked (`false`) the job
- `time` - the timestamp corresponding to when they reacted to the job

**Task**: The similarity score between two users is the number of jobs which they both like. Find the two users with the highest similarity.

**Answer**: Users `5193` and `1791` have the highest similarity score of `181`.

### Task 2

In the `data` folder there is an additional CSV file called `jobs.csv`. It contains unique integer IDs for over 12,000 jobs, along with integer IDs for the job's associated company.

**Task**: The similarity score between two companies is the number of users who like at least one job at both companies. Using both the `reactions.csv` and `jobs.csv` data, find the two companies with the highest similarity score.

**Answer**: Company `92` and `46` have the highest similarity score of `104`.

### Task 3

Engineering at Otta is truly full-stack. Features are owned end-to-end, from backend and database-level work to front-end finishes.

We don't think it's fair to ask you to build something with a UI, as we know this can take a while and time is precious. Instead, we'd love to see an example of something you've already built and hear about what you learned building it.

**Task**: Share an example of something you've built using front-end web technologies.

- A link to a GitHub repo is ideal
- If the best example of your work is something you've done at a company, it's okay to link to a live deployed version
- If you can't link to anything, a screenshot is also fine

**Answer**:
![Screenshot 2022-03-25 at 00 10 04](https://user-images.githubusercontent.com/41485837/160033423-8f0feeee-c10d-4d66-9799-75c413c710d2.png)

![Screenshot 2022-03-25 at 00 15 47](https://user-images.githubusercontent.com/41485837/160033546-3e82ab09-4c6e-4f2c-9a28-656f3436cdb9.png)

![Screenshot 2022-03-25 at 00 16 01](https://user-images.githubusercontent.com/41485837/160033594-150be771-e17b-46a7-a44a-bf8cf89da909.png)

![Screenshot 2022-03-25 at 00 16 18](https://user-images.githubusercontent.com/41485837/160033644-9eb36f3c-64f0-4f99-a662-3172805bdf8a.png)

**Task**: Tell us about the biggest challenge you faced in building the above.

**Answer**:
The biggest challenge is that the whole web app is comprised of micro frontend components, which requires a lot of collaborations with teams that are otherwise autonomous and work in completely different ways.
It is often very challenging to prioritize deliverables due to the components being dependent on one another and miscommunication on front end contracts can cause significant delays. Up until fairly recently there were still heavy dependencies on a team which rendered our micro frontend into their domain and it has required a lot of thought to figure out how to best reduce these dependencies as much as possible.
UI/UX consistency is also challenged heavily with this approach to building a web app. This is largely again due to autonomous teams needing to be in sync in a very large business.
A more technical challenge that I personally faced when developing and maintaining the above progressive forms where the handling of state for new progressive form behaviors. Due to the way state was being set and handled by the parent component of this micro frontend specific states of the form were unable to be set effectively.

## Submission

Once you've completed all of the above tasks, make sure:

- [x] You've committed all of the code used, and your edited answers, to the `main` branch
- [x] You've pushed the changes to your repo
- [x] You add `XavKearney` and `billyotta` as contributors for your personal repo, and send a link to the repo in an email or Otta message to us

Good luck!
