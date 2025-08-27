import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";
import { map } from "rxjs/operators";


@Injectable()
export class BookInterceptor implements NestInterceptor{
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>  {
  const request = context.switchToHttp().getRequest<Request>();
  request.body.name = "This is the name modified by Interceptor";
  request.body.age = 22;
  return next.handle().pipe(map((data) => {
     return "from interceptor";

  } ));
       
  }
}