import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './role.guard';
import { CONSTANTS } from './user/constants';


@Controller('app')
export class AppController {

  constructor(private readonly authService: AuthService) {
  }


  // Authentication
  @Post('/login')
  @UseGuards(AuthGuard('Local'))
  login(@Request() req): string {

    // jwt token
    let jwtToken = this.authService.generateJwtToken(req.user)
    return jwtToken;
  }

  @Get('/android-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
  androidDeveloperData(@Request() req): string {
    return "Android Developer Data" + JSON.stringify(req.user);
  }

  @Get('/web-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
  webDeveloperData(@Request() req): string {
    return "Web Developer Data" + JSON.stringify(req.user);
  }

  @Post("/upload")
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
      }
    })
  }))

  async uploadFile() {
    return "file uploaded successfully";
  }

}
