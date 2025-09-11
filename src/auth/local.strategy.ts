import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/user/entities/user.entity";
import { UserService } from "src/user/user.service";



@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly userService: UserService) {
        super();
    }

    async validate(userName: string, password: string): Promise<User | null> {
        const user = await this.userService.getUserByUserName(userName);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        if (user != null && user.password === password) {
            return user; // attaches user object to req.user
        } else {
            throw new UnauthorizedException('Invalid credentials');
        }


    }
}