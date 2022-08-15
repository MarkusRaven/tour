import { TodosModule } from './../todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { CategoryEntity } from './category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryEntity]),
    forwardRef(() => TodosModule),
  ],
  providers: [CategoryService, CategoryResolver],
  exports: [CategoryService, TypeOrmModule],
})
export class CategoryModule {}
