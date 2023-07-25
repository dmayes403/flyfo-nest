import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;
  
    @IsNotEmpty()
    lastName: string;
  
    @IsNotEmpty()
    @IsEmail()
    email: string;
  }