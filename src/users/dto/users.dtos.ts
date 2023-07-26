import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { RegType } from "src/enums/user.enum";

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  regType: RegType
}