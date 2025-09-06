import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";


@Injectable()
export class BookGuard implements CanActivate{

    public key : string = "123456";

     canActivate(context: ExecutionContext): boolean  {
        const request = context.switchToHttp().getRequest<Request>();

    //   if (request.header("key") != this.key) return false

         return true;
     }
}