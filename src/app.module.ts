import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserController } from "./user/user.controller";
import { UserModule } from "./user/user.module";
import { UserService } from "./user/user.service";
import { LoggerMiddleware } from "./middleware/loggermiddleware/LoggerMiddleware.middleware";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { ResponseInterceptorInterceptor } from "./interceptor/response-interceptor/response-interceptor.interceptor";

@Module({
  imports: [UserModule],
  controllers: [AppController, UserController],
  providers: [
    AppService,
    UserService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptorInterceptor,
    }, //this will use interceptor in global way,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes(UserController);
  }
}
