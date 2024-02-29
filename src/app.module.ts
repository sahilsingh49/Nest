import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosService } from './services/todos.service';
import { TodoClass, TodoSchema } from './models/todo.model';
import { TodosController } from './controllers/todos.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/todos'),
    MongooseModule.forFeature([{ name: TodoClass.name, schema: TodoSchema }]),
  ],
  controllers: [TodosController],
  providers: [TodosService],
})
export class AppModule {}
