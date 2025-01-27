import { Controller, Get, Post, Body, HttpCode, HttpStatus, BadRequestException, Query } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { ConfigService } from '@nestjs/config';

@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly configService: ConfigService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createProjectDto: CreateProjectDto) {
    try {
      const createdProject = await this.projectsService.create(createProjectDto);
      return { status: 201, message: 'Project created successfully', data: createdProject }; 
    } catch (error) {
      throw new BadRequestException('Error creating project');
    }
  }

  @Get()
  findAll(@Query('title')title:string='',@Query('stack')techStack:string='') {
    const stackArr = techStack.split(',');
    return this.projectsService.findAll(title,stackArr);
  }


}
