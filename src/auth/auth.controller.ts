import {
  Controller,
  Get,
  HttpStatus,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
// import { Response } from 'express';
// import { AuthService } from './auth.service';
// import { GoogleOauthGuard } from './guards/google-oauth.guard';

@Controller('auth')
export class AuthController {
  // constructor(private authService: AuthService) {}

  // @Get('google')
  // @UseGuards(GoogleOauthGuard)
  // // eslint-disable-next-line @typescript-eslint/no-empty-function
  // async auth() {}

  // @Get('google/callback')
  // @UseGuards(GoogleOauthGuard)
  // async googleAuthCallback(@Req() req, @Res() res: Response) {
  //   const token = await this.authService.signIn(req.user);

  //   res.cookie('access_token', token, {
  //     maxAge: 2592000000,
  //     sameSite: true,
  //     secure: false,
  //   });

  //   return res.status(HttpStatus.OK);
  // }
}

  // @Get()
  // @UseGuards(AuthGuard('google'))
  // async googleAuth(@Req() req) {}

  // @Get('redirect')
  // @UseGuards(AuthGuard('google'))
  // googleAuthRedirect(@Req() req) {
  //   return this.authService.googleLogin(req)
  // }

  // @Get('logout')
  // logout(@Req() req, @Res() res) {
  //   req.logout();
  //   res.redirect('/');
  // }

  // @Get('user')
  // getUser(@Req() req) {
  //   return req.user;
  // }
//}
