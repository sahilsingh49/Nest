import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class TodoClass extends Document {
  @Prop({ required: true })
  task: string;

  @Prop({ default: false })
  completed: boolean;
}
export const TodoSchema = SchemaFactory.createForClass(TodoClass);
