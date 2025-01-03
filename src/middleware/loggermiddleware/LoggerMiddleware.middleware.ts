import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(`this is logger middleware ${req.method} ${req.path}`);
    next();
  }
}
