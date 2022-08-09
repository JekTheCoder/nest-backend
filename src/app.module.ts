import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import configuration from './config/configuration';

@Module({
  imports: [
    UsersModule, 
    ConfigModule.forRoot({ load: [configuration], envFilePath:[!process.env.NODE_ENV ? '.env' : `enviroments/${process.env.NODE_ENV}.env`] })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
