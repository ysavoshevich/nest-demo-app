import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  task: string;

  @Prop()
  description: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
