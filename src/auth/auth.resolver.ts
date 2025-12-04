import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import {
  AuthResponse,
  InfluencerLoginInput,
  InfluencerRegisterInput,
} from './auth.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse)
  influencerLogin(
    @Args('input') input: InfluencerLoginInput,
  ): Promise<AuthResponse> {
    return this.authService.influencerLogin(input);
  }

  @Mutation(() => AuthResponse)
  influencerRegister(
    @Args('input') input: InfluencerRegisterInput,
  ): Promise<AuthResponse> {
    return this.authService.influencerRegister(input);
  }
}
