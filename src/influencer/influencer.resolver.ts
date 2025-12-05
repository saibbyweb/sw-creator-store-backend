import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Influencer } from 'src/---generated---';
import { InfluencerService } from './influencer.service';
import { CreateInfluencerInput } from './influencer.dto';
import { UseGuards } from '@nestjs/common';
import { CurrentEntity, InfluencerGuard } from 'src/auth';

@Resolver()
export class InfluencerResolver {
  constructor(private readonly iS: InfluencerService) {}

  @Query(() => [Influencer])
  async influencers(): Promise<Influencer[]> {
    return this.iS.influencers();
  }

  @Query(() => Influencer)
  @UseGuards(InfluencerGuard)
  async loggedInInfluencer(@CurrentEntity() entity: any): Promise<Influencer> {
    return await this.iS.loggedInInfluencer(entity.entityId);
  }

  @Mutation(() => Influencer)
  createInfluencer(
    @Args('input') input: CreateInfluencerInput,
  ): Promise<Influencer> {
    return this.iS.createInfluencer(input);
  }
}
