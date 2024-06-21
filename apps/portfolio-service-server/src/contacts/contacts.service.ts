import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContactsServiceBase } from "./base/contacts.service.base";

@Injectable()
export class ContactsService extends ContactsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
