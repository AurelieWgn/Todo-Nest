import { Injectable } from '@nestjs/common';
// import { Todo } from './interface.ts/todos.interface'; // No need, the model class do the same role
// import { CreateTodoDto } from './dto/CreateTodoDto.dto';  // when to use this ?
import { Todo } from './todo.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo)
    private todoModel: typeof Todo,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.findAll();
  }

  async create(todo: Todo) {
    await this.todoModel.create({ ...todo });
  }

  async findById(id: number): Promise<Todo> {
    // IMPORTANT : NotFoundException
    // console.log('type of', typeof id); return string even if is is typed as number ??
    //see pipes -> https://docs.nestjs.com/faq/request-lifecycle#pipes  and DTO
    return await this.todoModel.findOne({ where: { id: +id } });
  }

  async updateTodo(id: number, todo: Todo): Promise<Todo> {
    await this.todoModel.update(
      { ...todo },
      {
        where: {
          id: +id, //+id : same as Number(id) is't typescript cast
        },
      },
    );

    return todo;
  }

  async delete(id: string): Promise<Todo[]> {
    await this.todoModel.destroy({
      where: { id: +id },
    });

    return this.findAll();
  }
}
