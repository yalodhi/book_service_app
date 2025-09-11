import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/user/user.module';


@Module({
    imports: [PassportModule, 
        JwtModule.register({
            secret: "key",
            signOptions: {
                expiresIn: "60s"
            }
        }),
        UserModule
    ],
    controllers: [],
    providers: [LocalStrategy, JwtStrategy, AuthService],
    exports: [AuthService]


})
export class AuthModule { }
