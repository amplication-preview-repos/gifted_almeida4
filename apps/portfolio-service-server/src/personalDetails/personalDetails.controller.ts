import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PersonalDetailsService } from "./personalDetails.service";
import { PersonalDetailsControllerBase } from "./base/personalDetails.controller.base";

@swagger.ApiTags("personalDetails")
@common.Controller("personalDetails")
export class PersonalDetailsController extends PersonalDetailsControllerBase {
  constructor(protected readonly service: PersonalDetailsService) {
    super(service);
  }
}
