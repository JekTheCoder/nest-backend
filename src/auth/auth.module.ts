import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtConfig } from 'src/config/jwt.config';
import { User } from 'src/entities/user.entity';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { LocalStrategyService } from './service/local-strategy.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategyService],
  imports: [
    TypeOrmModule.forFeature([User]), 
    PassportModule, 
    JwtModule.registerAsync({ imports: [ConfigModule], useClass: JwtConfig })
  ],
})
export class AuthModule {}
