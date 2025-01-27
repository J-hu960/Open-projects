import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Model } from 'mongoose';
import { Project } from './schemas/project.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel(Project.name) private readonly ProjectModel:Model<Project>) {
    
  }
  
  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    try {
      const createdProject = await this.ProjectModel.create(createProjectDto);
      return createdProject; 
    } catch (error) {
      console.log(error);
      throw new Error('Error creating project');
    }
  }

  async findAll(title: string, techStack: string[]): Promise<Project[]> {
    try {
      console.log(title, techStack);
  
      const projects: Project[] = await this.ProjectModel.find({
        Title: { $regex: title, $options: 'i' },
        TechStack: { $elemMatch: { $regex: techStack.join('|'), $options: 'i' }}, 
    }).exec();
  
      console.log(projects);
      return projects;
    } catch (error) {
      console.error("Error finding projects:", error);
      return [];
    }
  }
  

}
