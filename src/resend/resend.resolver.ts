import { Resolver } from '@nestjs/graphql';
import { ResendService } from './resend.service';

@Resolver()
export class ResendResolver {
  constructor(private readonly resendService: ResendService) {}
}
