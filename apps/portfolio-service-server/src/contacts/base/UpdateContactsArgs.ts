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
import { ContactsWhereUniqueInput } from "./ContactsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ContactsUpdateInput } from "./ContactsUpdateInput";

@ArgsType()
class UpdateContactsArgs {
  @ApiProperty({
    required: true,
    type: () => ContactsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContactsWhereUniqueInput)
  @Field(() => ContactsWhereUniqueInput, { nullable: false })
  where!: ContactsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ContactsUpdateInput,
  })
  @ValidateNested()
  @Type(() => ContactsUpdateInput)
  @Field(() => ContactsUpdateInput, { nullable: false })
  data!: ContactsUpdateInput;
}

export { UpdateContactsArgs as UpdateContactsArgs };