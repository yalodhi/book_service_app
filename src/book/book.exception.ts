import { HttpException, HttpStatus } from "@nestjs/common";

export class BookException extends HttpException{
    constructor(){
        super('this is a custom exception', HttpStatus.BAD_REQUEST)
    }
}