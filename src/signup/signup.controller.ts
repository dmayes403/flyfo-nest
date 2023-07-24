import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { CreateUserDto } from "src/signup/dto/createUserDto";

@Controller('signup')
export class SignupController {
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    console.log('createUser', createUserDto)
  }

  @Get()
  async getUser() {
    console.log('getUser')
    return { name: 'some user name' }
  }
}