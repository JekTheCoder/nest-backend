import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';

@Module({
  controllers: [AuthController],
  imports: [TypeOrmModule.forFeature([User])],
  providers: [AuthService]
})
export class AuthModule {}
