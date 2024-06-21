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
import { ContactsWhereInput } from "./ContactsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ContactsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ContactsWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactsWhereInput)
  @IsOptional()
  @Field(() => ContactsWhereInput, {
    nullable: true,
  })
  every?: ContactsWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContactsWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactsWhereInput)
  @IsOptional()
  @Field(() => ContactsWhereInput, {
    nullable: true,
  })
  some?: ContactsWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContactsWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactsWhereInput)
  @IsOptional()
  @Field(() => ContactsWhereInput, {
    nullable: true,
  })
  none?: ContactsWhereInput;
}
export { ContactsListRelationFilter as ContactsListRelationFilter };