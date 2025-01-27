import { Project } from "../schemas/project.schema";

 const projects: Project[] = [
    {
      Id: '1',
      Title: 'Project A',
      Description: 'This is project A description',
      Link: 'https://example.com/project-a',
      TechStack: ['Node.js', 'MongoDB', 'Express'],
      CreationDate: new Date('2025-01-01'),
      CreatedBy: 'user1', // Optional, since it can be undefined
    },
    {
      Id: '2',
      Title: 'Project B',
      Description: 'This is project B description',
      Link: 'https://example.com/project-b',
      TechStack: ['React', 'Node.js', 'PostgreSQL'],
      CreationDate: new Date('2025-02-01'),
      CreatedBy: 'user2', // Optional
    },
    {
      Id: '3',
      Title: 'Project C',
      Description: 'This is project C description',
      Link: 'https://example.com/project-c',
      TechStack: ['Vue.js', 'Firebase'],
      CreationDate: new Date('2025-03-01'),
      // CreatedBy is omitted because it's optional
    }
  ];


export default projects;
  