import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContactsWhereInput = {
  detail?: StringNullableFilter;
  id?: StringFilter;
  typeField?: "Option1";
};
