import { PersonalDetailsWhereInput } from "./PersonalDetailsWhereInput";
import { PersonalDetailsOrderByInput } from "./PersonalDetailsOrderByInput";

export type PersonalDetailsFindManyArgs = {
  where?: PersonalDetailsWhereInput;
  orderBy?: Array<PersonalDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
