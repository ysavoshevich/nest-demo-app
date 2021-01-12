import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from 'src/todos/dto/create-todo.dto';
import { Todo } from './schemas/todo.schema';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    const todos = await this.todosService.findAll();
    console.log(todos);
    return todos;
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    await this.todosService.create(createTodoDto);
  }
}
