import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/entities/user.entity";

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService) {

    }

    // generate jwt token
    generateJwtToken(payload: User): string {
        return this.jwtService.sign(payload)
    }




}