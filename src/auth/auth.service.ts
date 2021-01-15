import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(userDto: UserDto) {
    const user = await this.validateUser(userDto);
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userDto: UserDto) {
    const createdUser = await this.usersService.create(userDto);
  }

  async validateUser(userDto: UserDto) {
    const user = await this.usersService.findOne(userDto.username);
    if (user && user.password === userDto.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
