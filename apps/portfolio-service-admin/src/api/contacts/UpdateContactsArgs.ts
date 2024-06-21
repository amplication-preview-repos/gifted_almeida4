import { ContactsWhereUniqueInput } from "./ContactsWhereUniqueInput";
import { ContactsUpdateInput } from "./ContactsUpdateInput";

export type UpdateContactsArgs = {
  where: ContactsWhereUniqueInput;
  data: ContactsUpdateInput;
};
