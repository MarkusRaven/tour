import { CategoryEntity } from './../category/category.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('todos')
export class TodosEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  text: string;

  @Field()
  @Column({ type: 'boolean', default: false })
  isCompleted: boolean;

  @Field(() => CategoryEntity)
  @ManyToOne(() => CategoryEntity, (category) => category.todos)
  category?: CategoryEntity;
}
