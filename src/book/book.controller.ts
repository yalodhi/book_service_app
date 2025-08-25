import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { BookService } from "./book.service";
import type { Book } from "./data/book.dto";
import { BookException } from "./book.exception";

@Controller("book")
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
    addBook(@Body(new ValidationPipe()) book: Book): string {
        return this.bookService.addBookService(book);
    }

}