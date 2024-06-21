import { Module } from "@nestjs/common";
import { PersonalDetailsModuleBase } from "./base/personalDetails.module.base";
import { PersonalDetailsService } from "./personalDetails.service";
import { PersonalDetailsController } from "./personalDetails.controller";
import { PersonalDetailsResolver } from "./personalDetails.resolver";

@Module({
  imports: [PersonalDetailsModuleBase],
  controllers: [PersonalDetailsController],
  providers: [PersonalDetailsService, PersonalDetailsResolver],
  exports: [PersonalDetailsService],
})
export class PersonalDetailsModule {}
