import { IsInt, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class Book {

    @IsUUID()
    id : string;

    @IsString()
    @IsNotEmpty()
    title : string;

    @IsString()
    author : string;

    @IsInt()
    published : string;
}