import * as graphql from "@nestjs/graphql";
import { PersonalDetailsResolverBase } from "./base/personalDetails.resolver.base";
import { PersonalDetails } from "./base/PersonalDetails";
import { PersonalDetailsService } from "./personalDetails.service";

@graphql.Resolver(() => PersonalDetails)
export class PersonalDetailsResolver extends PersonalDetailsResolverBase {
  constructor(protected readonly service: PersonalDetailsService) {
    super(service);
  }
}
