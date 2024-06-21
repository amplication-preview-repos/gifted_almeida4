import { Contacts as TContacts } from "../api/contacts/Contacts";

export const CONTACTS_TITLE_FIELD = "detail";

export const ContactsTitle = (record: TContacts): string => {
  return record.detail?.toString() || String(record.id);
};
