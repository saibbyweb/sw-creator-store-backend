import { Field, InputType } from '@nestjs/graphql';
import { Font, StoreDesign } from 'src/---generated---';

@InputType()
export class CreateStoreInput {
  @Field(() => String)
  slug: string;

  @Field(() => String)
  name: string;

  @Field(() => StoreDesign)
  design: StoreDesign;

  @Field(() => String)
  primaryColor: string;

  @Field(() => String)
  secondaryColor: string;

  @Field(() => Font)
  font: Font;
}

@InputType()
export class UpdateStoreInput {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => StoreDesign, { nullable: true })
  design?: StoreDesign;

  @Field(() => String, { nullable: true })
  primaryColor?: string;

  @Field(() => String, { nullable: true })
  secondaryColor?: string;

  @Field(() => Font, { nullable: true })
  font?: Font;
}
