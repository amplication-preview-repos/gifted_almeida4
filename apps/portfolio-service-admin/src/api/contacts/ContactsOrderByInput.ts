import { SortOrder } from "../../util/SortOrder";

export type ContactsOrderByInput = {
  createdAt?: SortOrder;
  detail?: SortOrder;
  id?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
