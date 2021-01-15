import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FindOneParams } from './dto/findOne.dto';
import { UserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class TodosController {
  constructor(private usersService: UsersService) {}

  @Get(':username')
  async findOne(@Param() findOneDto: FindOneParams): Promise<User> {
    const user = await this.usersService.findOne(findOneDto.username);
    return user;
  }

  @Post()
  async create(@Body() userDto: UserDto) {
    await this.usersService.create(userDto);
    return 'Created.';
  }
}
