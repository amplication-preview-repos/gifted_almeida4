import { Module } from "@nestjs/common";
import { ContactsModuleBase } from "./base/contacts.module.base";
import { ContactsService } from "./contacts.service";
import { ContactsController } from "./contacts.controller";
import { ContactsResolver } from "./contacts.resolver";

@Module({
  imports: [ContactsModuleBase],
  controllers: [ContactsController],
  providers: [ContactsService, ContactsResolver],
  exports: [ContactsService],
})
export class ContactsModule {}
