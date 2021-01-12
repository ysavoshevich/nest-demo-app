import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TodosModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
