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
  async findAll(): Promise<Todo[]> {
    const todos = await this.todosService.findAll();
    return todos;
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    await this.todosService.create(createTodoDto);
    return 'Created.';
  }

  @Patch(':id')
  async update(
    @Param('id') todoId: string,
    @Body() createTodoDto: CreateTodoDto,
  ) {
    await this.todosService.update(todoId, createTodoDto);
  }

  @Delete(':id')
  async remove(@Param('id') todoId: string) {
    await this.todosService.remove(todoId);
  }
}
