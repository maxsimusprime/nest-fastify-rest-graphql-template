import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ description: 'User email' })
  email: string;

  @Field({ description: 'User name' })
  name: string;
}
