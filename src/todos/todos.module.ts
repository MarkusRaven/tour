import { CategoryEntity } from './../category/category.entity';
import { CategoryModule } from './../category/category.module';
import { TodosResolver } from './todos.resolver';
import { TodosEntity } from './todos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { TodosService } from './todos.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TodosEntity, CategoryEntity]),
    forwardRef(() => CategoryModule),
  ],
  providers: [TodosService, TodosResolver],
  exports: [TodosService],
})
export class TodosModule {}
