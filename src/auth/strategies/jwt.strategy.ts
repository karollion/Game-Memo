// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { PassportStrategy } from '@nestjs/passport';
// import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
// import { ConfigType } from '@nestjs/config';
// import config from '../../config/config';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { User } from '../../users/entities/user.entity';

// export type JwtPayload = {
//   sub: string;
//   email: string;
// };

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
//   constructor(
//     @Inject(config.KEY) private configService: ConfigType<typeof config>,
//     @InjectRepository(User) private userRepository: Repository<User>,
//   ) {
//     const extractJwtFromCookie = (req) => {
//       let token = null;
//       if (req && req.cookies) {
//         token = req.cookies['access_token'];
//       }
//       return token || ExtractJwt.fromAuthHeaderAsBearerToken()(req);
//     };

//     super({
//       ignoreExpiration: false,
//       secretOrKey: configService.jwt.secret,
//       jwtFromRequest: extractJwtFromCookie,
//     });
//   }

//   async validate(payload: JwtPayload) {
//     const user = await this.userRepository.findOne({ id: payload.sub });

//     if (!user) throw new UnauthorizedException('Please log in to continue');

//     return {
//       id: payload.sub,
//       email: payload.email,
//     };
//   }
// }