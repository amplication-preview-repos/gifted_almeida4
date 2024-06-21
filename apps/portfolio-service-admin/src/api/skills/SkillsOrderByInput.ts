import { SortOrder } from "../../util/SortOrder";

export type SkillsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  proficiency?: SortOrder;
  updatedAt?: SortOrder;
};
