import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { ResponseInterceptorInterceptor } from "./interceptor/response-interceptor/response-interceptor.interceptor";
import { AuthGuard } from './guard/auth/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // define globally validation pip
  // app.useGlobalInterceptors(new ResponseInterceptorInterceptor()) //this will use interceptor in global way
  // app.useGlobalGuards(new AuthGuard()); //use in global way
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
