import { Field, InputType, Int } from '@nestjs/graphql';
import { ProductStyle, ProductType } from 'src/---generated---';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  storeId: string;

  @Field(() => ProductStyle)
  style: ProductStyle;

  @Field(() => ProductType)
  type: ProductType;

  @Field(() => String)
  url: string;

  @Field(() => Int)
  position: number;

  @Field(() => String)
  mediaId?: string;

  @Field(() => String)
  title?: string;

  @Field(() => String)
  subTitle: string;

  @Field(() => String)
  buttonText: string;

  @Field(() => Boolean)
  published: boolean;
}

@InputType()
export class UpdateProductInput {
  @Field(() => String)
  id: string;

  @Field(() => ProductStyle, { nullable: true })
  style?: ProductStyle;

  @Field(() => String, { nullable: true })
  url?: string;

  @Field(() => Int, { nullable: true })
  position?: number;

  @Field(() => String, { nullable: true })
  mediaId?: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  subTitle?: string;

  @Field(() => String, { nullable: true })
  buttonText?: string;

  @Field(() => Boolean, { nullable: true })
  published?: boolean;
}
