import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  JwtModuleAsyncOptions,
  JwtModuleOptions,
  JwtOptionsFactory,
} from '@nestjs/jwt';

@Injectable()
export class JwtConfig implements JwtOptionsFactory {
  constructor(private configService: ConfigService) {}

  createJwtOptions(): JwtModuleOptions | Promise<JwtModuleOptions> {
    return { secret: this.configService.getOrThrow('jwt.token') };
  }
}
