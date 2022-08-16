import { TodosEntity } from './todos/todos.entity';
import { CategoryEntity } from './category/category.entity';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
      introspection: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'ec2-54-194-211-183.eu-west-1.compute.amazonaws.com',
        port: 5432,
        username: 'hvypgmuivqagyy',
        password:
          '727193ecdfd59229e0e9ef512c9a64dc19b54a1c59d8639d8092616ce075287f',
        database: 'd190m68fp34s15',
        entities: [CategoryEntity, TodosEntity],
        synchronize: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      }),
    }),
    CategoryModule,
    TodosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
