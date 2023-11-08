import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Todo } from './todo.model';

@Module({
  imports: [SequelizeModule.forFeature([Todo])], // Sequelize model
  controllers: [TodosController],
  providers: [TodosService],
  // export it to use it outside this module
  exports: [SequelizeModule], // SequelizeModule get all the modules
})
export class TodosModule {}
