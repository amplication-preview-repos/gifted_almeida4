import * as graphql from "@nestjs/graphql";
import { ContactsResolverBase } from "./base/contacts.resolver.base";
import { Contacts } from "./base/Contacts";
import { ContactsService } from "./contacts.service";

@graphql.Resolver(() => Contacts)
export class ContactsResolver extends ContactsResolverBase {
  constructor(protected readonly service: ContactsService) {
    super(service);
  }
}
