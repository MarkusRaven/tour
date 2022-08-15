import { CategoryEntity } from './category.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async categories(): Promise<CategoryEntity[]> {
    const todos = await this.categoryRepository.find({
      relations: ['todos'],
    });
    return todos;
  }
}
