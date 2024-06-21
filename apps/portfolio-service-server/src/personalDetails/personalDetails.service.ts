import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PersonalDetailsServiceBase } from "./base/personalDetails.service.base";

@Injectable()
export class PersonalDetailsService extends PersonalDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
