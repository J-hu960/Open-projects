import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from '../../projects.controller';
import { ProjectsService } from '../../projects.service';
import { CreateProjectDto } from '../../dto/create-project.dto';
import { ConfigService } from '@nestjs/config';

describe('Projects Controller', () => {
  let controller: ProjectsController;
  let service: ProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [
        ProjectsService,
        ConfigService,
        {
          provide: 'ProjectModel',
          useValue: {}, 
        },
      ],
    }).compile();

    controller = module.get<ProjectsController>(ProjectsController);
    service = module.get<ProjectsService>(ProjectsService);
  });

  describe('Create new project', () => {
    const goodInput: CreateProjectDto = {
      Title: 'Portfolio Websites',
      Description: 'A personal portfolio website showcasing my projects and skills.',
      CreationDate: new Date(),
      TechStack: ['HTML', 'CSS', 'JavaScript', 'React'],
      Link: 'https://myportfolio.com',
      CreatedBy: '',
    };
    it('should return a status created', async () => {
      

      const createdProject = { ...goodInput, Id: "idforprojet" }; 

      jest.spyOn(service, 'create').mockResolvedValue(createdProject);

      const response = await controller.create(goodInput);

      expect(response.status).toBe(201);
      expect(response.message).toBe('Project created successfully');
      expect(response.data).toEqual(createdProject); // Verifica que el proyecto creado se incluya en la respuesta
    });

    it('should throw an error if input is invalid', async () => {
      const badInput = { ...goodInput, Title: '' }; // Simula un caso con datos incorrectos

      // Mock the service call to throw an error
      jest.spyOn(service, 'create').mockRejectedValue(new Error('Invalid input'));

      try {
        await controller.create(badInput);
      } catch (error) {
        expect(error.response.statusCode).toBe(400); 
        expect(error.response.message).toBe('Error creating project');
      }
    });
  });
});
