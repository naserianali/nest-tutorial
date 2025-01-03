import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { LoginDto, UserCreateDto } from "./user.dto";
import { EmailValidationPip } from "./pips/email.pips";

@Controller("user")
// @UseInterceptors(ResponseInterceptorInterceptor) define it for only this controller
// @UseGuards(AuthGuard) //use Guard for all of this controller routes
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  // @UseGuards(AuthGuard) //use Guard for this route look at main ts and app module for global usage
  fetchAll() {
    return this.userService.fetchAll();
  }

  @Post()
  // @UseInterceptors(ResponseInterceptorInterceptor) define it for only this route look at main ts and app module for global interceptor
  create(@Body(new ValidationPipe()) userDto: UserCreateDto) {
    return this.userService.create(userDto);
  }

  //without pip validation
  /*@Get(":id")
  findOne(@Param("id") id: number) {
    return this.userService.findOne(+id); //+id make id convert id to number if it sent like this '2'
  }*/

  //with pip validation
  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.userService.findOne(+id); //+id make id convert id to number if it sent like this '2'
  }

  // validate email with custom pip
  @Post("/register")
  register(@Body("email", EmailValidationPip) email: string) {
    return email;
  }

  // validation email with Dto
  // for define validation as global to work look at main ts
  @Post("/login")
  login(@Body() loginDto: LoginDto) {
    return loginDto;
  }
}
