import { IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  task: string;

  @IsNotEmpty()
  description: string;
}
