import { Test, TestingModule } from '@nestjs/testing';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ConfigService } from '@nestjs/config';
import {ObjectId} from 'mongoose';
import { Comment } from './schemas/comments.schema';

describe('Comments Controller', () => {
  let controller: CommentsController;
  let service: CommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentsController],
      providers: [
        CommentsService,
        ConfigService,
        {
          provide: 'CommentModel',
          useValue: {}, 
        },
      ],
    }).compile();

    controller = module.get<CommentsController>(CommentsController);
    service = module.get<CommentsService>(CommentsService);
  });

  describe('Create new Comment', () => {
    const goodInput: CreateCommentDto = {
      content: 'mock comment',
      postId: 'mocksiwndbdwiwdw'
    };
    it('should return a status created', async () => {
      
      const createdComment:Comment = { ...goodInput,Content: "idforprojet",ProjectId:"dwbwdw",Id:"ycgtyf",CreatedAt:"wdhdqbw" }; 

      jest.spyOn(service, 'create').mockResolvedValue(createdComment);

      const response = await controller.create(goodInput);

      expect(response.status).toBe(201);
      expect(response.message).toBe('Comment created successfully');
    });

    it('should throw an error if input is invalid', async () => {
      const badInput = { ...goodInput, Title: '' }; // Simula un caso con datos incorrectos

      // Mock the service call to throw an error
      jest.spyOn(service, 'create').mockRejectedValue(new Error('Invalid input'));

      try {
        await controller.create(badInput);
      } catch (error) {
        expect(error.response.statusCode).toBe(400); 
        expect(error.response.message).toBe('Cannot create commment');
      }
    });
  });
});
