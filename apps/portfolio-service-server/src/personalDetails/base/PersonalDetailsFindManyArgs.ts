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
import { PersonalDetailsWhereInput } from "./PersonalDetailsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PersonalDetailsOrderByInput } from "./PersonalDetailsOrderByInput";

@ArgsType()
class PersonalDetailsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PersonalDetailsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PersonalDetailsWhereInput, { nullable: true })
  @Type(() => PersonalDetailsWhereInput)
  where?: PersonalDetailsWhereInput;

  @ApiProperty({
    required: false,
    type: [PersonalDetailsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PersonalDetailsOrderByInput], { nullable: true })
  @Type(() => PersonalDetailsOrderByInput)
  orderBy?: Array<PersonalDetailsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PersonalDetailsFindManyArgs as PersonalDetailsFindManyArgs };
