/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Contacts as PrismaContacts } from "@prisma/client";

export class ContactsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ContactsCountArgs, "select">): Promise<number> {
    return this.prisma.contacts.count(args);
  }

  async contactsItems(
    args: Prisma.ContactsFindManyArgs
  ): Promise<PrismaContacts[]> {
    return this.prisma.contacts.findMany(args);
  }
  async contacts(
    args: Prisma.ContactsFindUniqueArgs
  ): Promise<PrismaContacts | null> {
    return this.prisma.contacts.findUnique(args);
  }
  async createContacts(
    args: Prisma.ContactsCreateArgs
  ): Promise<PrismaContacts> {
    return this.prisma.contacts.create(args);
  }
  async updateContacts(
    args: Prisma.ContactsUpdateArgs
  ): Promise<PrismaContacts> {
    return this.prisma.contacts.update(args);
  }
  async deleteContacts(
    args: Prisma.ContactsDeleteArgs
  ): Promise<PrismaContacts> {
    return this.prisma.contacts.delete(args);
  }
}