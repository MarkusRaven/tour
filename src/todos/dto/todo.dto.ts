import { Field } from '@nestjs/graphql';

export class TodoDto {
  @Field()
  text: string;

  @Field()
  isCompleted: boolean;
}
