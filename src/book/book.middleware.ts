import { Injectable, NestMiddleware } from "@nestjs/common";
import { log } from "console";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class BookMiddleware implements NestMiddleware {
    use (req : Request, res : Response, next: NextFunction){
        let protocol = req.protocol;  // http or https
        let host = req.get("host");   // localhost:3000
        let url = req.originalUrl;  // /book/add
        let method = req.method;      // POST, GEt , Put
        let date = new Date().toDateString();

        console.log(protocol +"://"+ host + url + "  " + method + "  " + date);
        next();
    }

}