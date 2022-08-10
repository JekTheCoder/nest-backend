import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { LocalStrategyService } from './service/local-strategy.service';

@Module({
  controllers: [AuthController],
  imports: [TypeOrmModule.forFeature([User])],
  providers: [AuthService, LocalStrategyService]
})
export class AuthModule {}
