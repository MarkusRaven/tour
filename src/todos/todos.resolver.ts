import { CreateTodosInput, AddTodosInput } from './dto/create-todos.input';
import { CategoryEntity } from './../category/category.entity';
import { TodosEntity } from './todos.entity';
import { TodosService } from './todos.service';
import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver(() => CategoryEntity)
export class TodosResolver {
  // constructor(
  //   @Inject(TodosService) private readonly todosService: TodosService,
  // ) {}
  // @Mutation(() => TodosEntity)
  // async createTodo(
  //   @Args('input') todoInput: CreateTodosInput,
  // ): Promise<TodosEntity> {
  //   return this.todosService.createTodo(todoInput);
  // }
  // @Mutation(() => TodosEntity)
  // async addTodo(
  //   @Args('input') updateInput: AddTodosInput,
  // ): Promise<TodosEntity> {
  //   return this.todosService.addTodo(updateInput);
  // }
}
