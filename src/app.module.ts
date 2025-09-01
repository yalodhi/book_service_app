import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [BookModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ".local.env",
    // envFilePath : ".prod.env"
  }),
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'mydb',
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
