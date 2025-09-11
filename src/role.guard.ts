import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";


@Injectable()
export class RoleGuard implements CanActivate {

    private rolePassed: string;
    constructor(role: string) {
        this.rolePassed = role;
    }

    canActivate(context: ExecutionContext): boolean {
        const request: any = context.switchToHttp().getRequest<Request>();

        return this.rolePassed === request.user.role;;
    }
}