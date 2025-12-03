import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class InfluencerResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello World!';
  }
}
