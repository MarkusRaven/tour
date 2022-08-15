import { CategoryEntity } from './../category/category.entity';
import { CreateTodosInput, AddTodosInput } from './dto/create-todos.input';
import { TodosEntity } from './todos.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
    @InjectRepository(TodosEntity)
    private readonly todosRepository: Repository<TodosEntity>,
  ) {}

  async addTodo(categoryInput: AddTodosInput): Promise<TodosEntity> {
    const { text, categoryId } = categoryInput;

    const category: CategoryEntity = await this.categoryRepository.findOne({
      where: { id: categoryId },
      relations: ['todos'],
    });

    const todo: TodosEntity = await this.todosRepository.save({
      text,
      category,
    });

    return todo;
  }

  async createTodo(todosInput: CreateTodosInput): Promise<TodosEntity> {
    const { categoryName, text } = todosInput;
    const todoCategory = await this.categoryRepository.save({
      title: categoryName,
    });
    const todo = await this.todosRepository.save({
      text,
      category: todoCategory,
    });
    return await this.todosRepository.findOne({
      where: { id: todo.id },
      relations: ['category'],
    });
  }
}
