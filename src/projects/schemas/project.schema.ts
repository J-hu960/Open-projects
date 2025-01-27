
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;
// final mongo collection name will be 'projects'
@Schema()
export class Project {
  @Prop()
  Id:string;

  @Prop({required:true,unique:true})
  Title:string;

  @Prop({required:true})
  Description:string;

  @Prop({required:true})

  Link:string;

  @Prop([String])
  TechStack:string[];

  @Prop({required:true})
  CreationDate: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User',required:false })
  CreatedBy?:string
  
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
