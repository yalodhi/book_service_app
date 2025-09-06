import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';


@Controller()
export class AppController {
  
@Get()
getHello(): string {
    return "Hello World";
}

  @Post("/upload")
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
        destination : './uploads',
        filename: (req, file, cb ) => {
            cb(null, `${file.originalname}` )
        }
    })
  }))

  async uoloadFile(){ 
  return "file uploaded successfully";
  }
  
}
