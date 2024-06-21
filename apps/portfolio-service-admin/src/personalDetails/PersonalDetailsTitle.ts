import { PersonalDetails as TPersonalDetails } from "../api/personalDetails/PersonalDetails";

export const PERSONALDETAILS_TITLE_FIELD = "fullName";

export const PersonalDetailsTitle = (record: TPersonalDetails): string => {
  return record.fullName?.toString() || String(record.id);
};
