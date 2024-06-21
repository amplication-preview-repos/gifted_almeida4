/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum } from "class-validator";
import { EnumSkillsProficiency } from "./EnumSkillsProficiency";

@InputType()
class SkillsCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumSkillsProficiency,
  })
  @IsEnum(EnumSkillsProficiency)
  @IsOptional()
  @Field(() => EnumSkillsProficiency, {
    nullable: true,
  })
  proficiency?: "Option1" | null;
}

export { SkillsCreateInput as SkillsCreateInput };
