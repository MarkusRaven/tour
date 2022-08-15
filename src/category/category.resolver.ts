import { TodosEntity } from './../todos/todos.entity';
import { CategoryService } from './category.service';
import { Query, Resolver } from '@nestjs/graphql';
import { CategoryEntity } from './category.entity';

@Resolver(() => TodosEntity)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [CategoryEntity])
  async categories(): Promise<CategoryEntity[]> {
    return await this.categoryService.categories();
  }
}
