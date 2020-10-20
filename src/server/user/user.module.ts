import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { userSchema } from './user.schema';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Users', schema: userSchema }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
