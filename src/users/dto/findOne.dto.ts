import { IsNotEmpty } from 'class-validator';

export class FindOneParams {
  @IsNotEmpty()
  username: string;
}
