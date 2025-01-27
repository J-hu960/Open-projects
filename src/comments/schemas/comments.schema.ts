
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;
// final mongo collection name will be 'Comments'
@Schema()
export class Comment {
  @Prop()
  Id:string;
  
  @Prop({required:true})
  Content:String;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User',required:false })
  UserId?:string
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Project' })
  ProjectId:string

  @Prop(Date)
  CreatedAt:string
  
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
