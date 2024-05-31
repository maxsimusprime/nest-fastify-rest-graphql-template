import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  /* mutation {
    createUser(
      createUserInput: {
        name: "Alex",
        email: "mail" 
      }
    ) {
      name
    }
  } */
  @Mutation(() => UserEntity)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  /* 
  query {
      users {
      id
      name
      email
    }
  }
  */
  @Query(() => [UserEntity], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  /* 
  query {
    user(id: "771afba8-3b08-42b6-b41a-bfff1bf972dd") {
      id
      name
      email
    }
  }
  */
  @Query(() => UserEntity, { name: 'user' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.userService.findOne(id);
  }

  /* 
  mutation {
    updateUser(updateUserInput: {
      id: "771afba8-3b08-42b6-b41a-bfff1bf972dd",
      name: "John"
    }) {
      name
    }
  }
  */
  @Mutation(() => UserEntity)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  /* 
  mutation {
    removeUser(id: "771afba8-3b08-42b6-b41a-bfff1bf972dd") {
      name
    }
  }
  */
  @Mutation(() => UserEntity)
  removeUser(@Args('id', { type: () => ID }) id: string) {
    return this.userService.remove(id);
  }
}
