import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UseInterceptors, ValidationPipe } from "@nestjs/common";
import { BookService } from "./book.service";
import type { Book } from "./data/book.dto";
import { BookException } from "./book.exception";
import { BookGuard } from "./book.guard";
import { BookInterceptor } from "./book.interceptor";


@Controller("book")
@UseGuards(new BookGuard())
export class BookController {

    constructor(private bookService: BookService) {
        
    }

    @Get("/findAll")
    getAllBooks(): Book[] {
        throw new BookException();
        return this.bookService.findAllBooks();
    }

    @Put("/update")
    updateBook(@Body() book: Book): string {
        return this.bookService.updateBookService(book);
    }

    @Delete("/delete/:id")
    deleteBook(@Param("id") bookId: string): string {
        return this.bookService.deleteBookService(bookId);
    }
    
    @Post("/add")
//  @UseGuards(new BookGuard())
    addBook(@Body(new ValidationPipe()) book: Book): string {
        return this.bookService.addBookService(book);
    }

     @Post("")
     @UseInterceptors(BookInterceptor)
    helloWorld() : string{
        return "this is the post method for interceptor demo";
    }
    

}