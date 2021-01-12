import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from 'src/todos/dto/create-todo.dto';
// import { Todo } from 'src/interfaces/todo.interface';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    try {
      const createdTodo = new this.todoModel(createTodoDto);
      console.log(createdTodo);
      return await createdTodo.save();
    } catch (error) {}
  }

  async findAll(): Promise<Todo[]> {
    const todos = await this.todoModel.find().exec();
    console.log(todos);
    return todos;
  }
}
