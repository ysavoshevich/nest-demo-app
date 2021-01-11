import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from 'src/dto/create-todo.dto';
import { Todo } from 'src/interfaces/todo.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Post()
  create(@Body() createTodoDto: CreateTodoDto): string {
    this.todosService.create(createTodoDto);
    return 'Created.';
  }
}
