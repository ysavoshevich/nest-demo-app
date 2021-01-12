import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTodoDto } from 'src/todos/dto/create-todo.dto';
import { Todo } from './schemas/todo.schema';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  async findAllTodos(): Promise<Todo[]> {
    const todos = await this.todosService.findAllTodos();
    return todos;
  }

  @Post()
  async createTodo(@Body() createTodoDto: CreateTodoDto) {
    await this.todosService.createTodo(createTodoDto);
    return 'Created.';
  }

  @Patch(':id')
  async updateTodo(
    @Param('id') todoId: string,
    @Body() createTodoDto: CreateTodoDto,
  ) {
    await this.todosService.updateTodo(todoId, createTodoDto);
  }

  @Delete(':id')
  async removeTodo(@Param('id') todoId: string) {
    await this.todosService.removeTodo(todoId);
  }
}
