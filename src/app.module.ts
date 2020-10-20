import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './server/user/user.module';

const DBModule = MongooseModule.forRoot('mongodb://localhost/xxx');

@Module({
  imports: [DBModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
