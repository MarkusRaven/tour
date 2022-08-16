import { UpdateTodoInput } from './dto/update-todos.input';
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

  async createTodo(todoInput: CreateTodosInput): Promise<TodosEntity> {
    const { categoryName, text } = todoInput;
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

  async updateTodo(todoInput: UpdateTodoInput): Promise<TodosEntity> {
    const { todoId } = todoInput;
    const todo = await this.todosRepository.findOneBy({ id: todoId });
    todo.isCompleted = !todo.isCompleted;
    return await this.todosRepository.save(todo);
  }
}
