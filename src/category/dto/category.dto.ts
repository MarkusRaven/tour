import { TodoDto } from './../../todos/dto/todo.dto';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CategoryDto {
  @Field()
  title: string;
}
