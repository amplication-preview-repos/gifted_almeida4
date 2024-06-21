import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SkillsWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  proficiency?: "Option1";
};
