import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContactsService } from "./contacts.service";
import { ContactsControllerBase } from "./base/contacts.controller.base";

@swagger.ApiTags("contacts")
@common.Controller("contacts")
export class ContactsController extends ContactsControllerBase {
  constructor(protected readonly service: ContactsService) {
    super(service);
  }
}
