import { Skills as TSkills } from "../api/skills/Skills";

export const SKILLS_TITLE_FIELD = "name";

export const SkillsTitle = (record: TSkills): string => {
  return record.name?.toString() || String(record.id);
};
