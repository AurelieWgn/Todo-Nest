import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodosService } from './todos.service';
// import { Todo } from './interface.ts/todos.interface';
// import { CreateTodoDto } from './dto/CreateTodoDto.dto';
import { Todo } from './todo.model';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return await this.todoService.findAll();
  }

  @Post()
  async createTodo(@Body() newTodo: Todo) {
    await this.todoService.create(newTodo);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Todo> {
    return await this.todoService.findById(id);
  }

  @Patch(':id') //route/todos/id
  async updateTodo(@Param('id') id: number, @Body() todo: Todo): Promise<Todo> {
    return await this.todoService.updateTodo(id, todo);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    return await this.todoService.delete(id);
  }
}
