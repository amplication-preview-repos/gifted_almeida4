/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SkillsWhereUniqueInput } from "./SkillsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SkillsUpdateInput } from "./SkillsUpdateInput";

@ArgsType()
class UpdateSkillsArgs {
  @ApiProperty({
    required: true,
    type: () => SkillsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SkillsWhereUniqueInput)
  @Field(() => SkillsWhereUniqueInput, { nullable: false })
  where!: SkillsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SkillsUpdateInput,
  })
  @ValidateNested()
  @Type(() => SkillsUpdateInput)
  @Field(() => SkillsUpdateInput, { nullable: false })
  data!: SkillsUpdateInput;
}

export { UpdateSkillsArgs as UpdateSkillsArgs };