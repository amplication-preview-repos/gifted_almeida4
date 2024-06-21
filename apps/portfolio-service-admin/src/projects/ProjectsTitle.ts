import { Projects as TProjects } from "../api/projects/Projects";

export const PROJECTS_TITLE_FIELD = "title";

export const ProjectsTitle = (record: TProjects): string => {
  return record.title?.toString() || String(record.id);
};
