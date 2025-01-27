
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
// final mongo collection name will be 'Users'


@Schema()
export class User {
  @Prop()
  Id:string;

  @Prop({required:true})
  UserName:string;

  @Prop({required:true})
  Email:string;

  @Prop({required:true})
  HashedPassword:string;

  @Prop([String])
  TechStack:string[];
  
}

export const UserSchema = SchemaFactory.createForClass(User);
