import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from 'src/todos/dto/create-todo.dto';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    try {
      const createdTodo = new this.todoModel(createTodoDto);
      return await createdTodo.save();
    } catch (error) {}
  }

  async findAll(): Promise<Todo[]> {
    const todos = await this.todoModel.find().exec();
    return todos.map((todo) => ({
      id: todo.id,
      task: todo.task,
      description: todo.description,
    }));
  }

  async remove(todoId: string) {
    await this.todoModel.deleteOne({ _id: todoId }).exec();
  }

  async update(todoId: string, createTodoDto: CreateTodoDto) {
    await this.todoModel.findByIdAndUpdate(
      { _id: todoId },
      { ...createTodoDto },
    );
  }
}
