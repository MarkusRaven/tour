import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTodosInput {
  @Field()
  @IsNotEmpty()
  text: string;

  @Field()
  @IsNotEmpty()
  categoryName: string;
}

@InputType()
export class AddTodosInput {
  @Field()
  @IsNotEmpty()
  text: string;

  @Field()
  @IsNotEmpty()
  categoryId: number;
}
