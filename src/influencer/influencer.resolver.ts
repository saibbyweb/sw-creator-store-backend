import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Influencer } from 'src/---generated---';
import { InfluencerService } from './influencer.service';
import { CreateInfluencerInput } from './influencer.dto';

@Resolver()
export class InfluencerResolver {
  constructor(private readonly iS: InfluencerService) {}

  @Mutation(() => Influencer)
  createInfluencer(
    @Args('input') input: CreateInfluencerInput,
  ): Promise<Influencer> {
    return this.iS.createInfluencer(input);
  }
}
