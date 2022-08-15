import { TodosEntity } from './../todos/todos.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('categories')
export class CategoryEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field(() => [TodosEntity], { nullable: true })
  @OneToMany(() => TodosEntity, (todos) => todos.category)
  todos?: TodosEntity[];
}
