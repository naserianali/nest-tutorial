import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserCreateDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class LoginDto {
  @IsEmail()
  email: string;
}
