import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const response = context.switchToHttp().getRequest<Request>();
    const token = response?.headers?.authorization;
    console.log(token);
    return !!token;
  }
}
