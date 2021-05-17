import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
// import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    // GraphQLModule.forRoot({}),
    MongooseModule.forRoot('mongodb+srv://admin666:asdasd123@testcluster666.kuid2.mongodb.net/gara?retryWrites=true&w=majority'),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
