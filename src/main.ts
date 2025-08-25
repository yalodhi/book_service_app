import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';
import { ValidationPipe } from '@nestjs/common';

// Global Middleware implemented with the help of function 
function globalMiddleware (req : Request, res : Response, next : NextFunction){
 console.log("This is Global Middleware");  
 next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleware);     // Middleware
  app.useGlobalPipes(new ValidationPipe());     // pipe
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
