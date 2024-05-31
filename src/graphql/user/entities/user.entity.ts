import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '@prisma/client';

@ObjectType()
export class UserEntity implements User {
  @Field(() => ID, { description: 'User id' })
  id: string;

  @Field({ description: 'User email' })
  email: string;

  @Field({ description: 'User name' })
  name: string;
}
