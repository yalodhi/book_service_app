import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { ConfigModule, ConfigService,  } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: ".local.env",
        // envFilePath : ".prod.env"
      })],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: configService.get<boolean>('DB_SYNC'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        logging : false

      }),
      inject: [ConfigService],
    }),
    BookModule,
    UserModule
    
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
