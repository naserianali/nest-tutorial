import { Controller, Get } from "@nestjs/common";

@Controller("user")
export class UserController {
  @Get()
  user() {
    return "User Controller";
  }
}
