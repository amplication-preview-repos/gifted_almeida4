import { ContactsWhereInput } from "./ContactsWhereInput";
import { ContactsOrderByInput } from "./ContactsOrderByInput";

export type ContactsFindManyArgs = {
  where?: ContactsWhereInput;
  orderBy?: Array<ContactsOrderByInput>;
  skip?: number;
  take?: number;
};
