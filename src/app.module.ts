import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://totalzero:fzHtH4bijeKyCRx@clusterapi.rppdz.mongodb.net/test'),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
