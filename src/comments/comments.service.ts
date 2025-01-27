import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './schemas/comments.schema';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment.name) private readonly CommentModel:Model<Comment>) {}

  async create(createCommentDto: CreateCommentDto):Promise<Comment> {
    try {
      const createdComment = await this.CommentModel.create(createCommentDto);
      return createdComment; 
    } catch (error) {
      console.log(error);
      throw new Error('Error creating project');
    }
  }

  
}
